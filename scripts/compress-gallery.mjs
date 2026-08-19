import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const galleryDir = path.join(__dirname, '../public/images/gallery');

const MAX_WIDTH = 1920;
const JPEG_QUALITY = 82;

async function compressFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const base = path.basename(filePath, ext);
  const dir = path.dirname(filePath);

  const meta = await sharp(filePath).metadata();
  let pipeline = sharp(filePath).rotate();

  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  if (ext === '.png') {
    const outPath = path.join(dir, `${base}.jpg`);
    const tmp = `${outPath}.tmp`;
    await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tmp);
    fs.renameSync(tmp, outPath);
    if (filePath !== outPath) fs.unlinkSync(filePath);
    return outPath;
  }

  const tmp = `${filePath}.tmp`;
  await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tmp);
  fs.renameSync(tmp, filePath);
  return filePath;
}

const files = fs
  .readdirSync(galleryDir)
  .filter((f) => /\.(jpe?g|png)$/i.test(f))
  .map((f) => path.join(galleryDir, f));

let beforeTotal = 0;
let afterTotal = 0;

for (const filePath of files) {
  const before = fs.statSync(filePath).size;
  beforeTotal += before;
  const outPath = await compressFile(filePath);
  const after = fs.statSync(outPath).size;
  afterTotal += after;
  console.log(
    `${path.basename(filePath)} -> ${(before / 1024 / 1024).toFixed(2)} MB -> ${(after / 1024 / 1024).toFixed(2)} MB`,
  );
}

console.log(
  `\nTotal: ${(beforeTotal / 1024 / 1024).toFixed(2)} MB -> ${(afterTotal / 1024 / 1024).toFixed(2)} MB`,
);
