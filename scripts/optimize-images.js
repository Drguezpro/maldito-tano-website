// scripts/optimize-images.js
import sharp from 'sharp';
import { glob } from 'glob';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

// Carpeta principal del sitio y la de Banco de Imágenes
const folders = [
  path.resolve(__dirname, '../public/assets'),
  path.resolve(__dirname, '../../BancoImagenes')
];

async function optimize() {
  for (const folderRaw of folders) {
    // Normalizamos slashes
    const folder = folderRaw.replace(/\\/g, '/');
    const files = await glob(`${folder}/**/*.+(jpg|jpeg|png)`, { nocase: true });
    console.log(`🔍 ${path.basename(folder)} → encontradas: ${files.length}`);

    for (const file of files) {
      const outWebp = file.replace(/\.(jpe?g|png)$/i, '.webp');
      await sharp(file).webp({ quality: 80 }).toFile(outWebp);
      await fs.remove(file);
      console.log(`✅ ${path.relative(folder, outWebp)}`);
    }
  }
}

optimize().catch(err => {
  console.error(err);
  process.exit(1);
});
