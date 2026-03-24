import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const IMAGES_DIR = './public/images';

// Image configs: [filename, outputWidth, outputHeight or null to auto-scale]
const imageConfigs = [
  // Project preview images — displayed at ~600px wide on desktop, fit within ~400px height
  { src: 'thisite.jpg',       width: 1200, height: 400 },
  { src: 'campusthrive.png',  width: 1200, height: 400 },
  { src: 'hoorcharms.jpg',    width: 1200, height: 400 },
  { src: 'smartballot.jpeg',  width: 1200, height: 400 },
  { src: 'tayyab.png',        width: 1200, height: 400 },
  { src: 'bbserv.jpeg',       width: 1200, height: 400 },
  { src: 'busrc1.png',        width: 1200, height: 400 },
  { src: 'socialsight.jpg',   width: 1200, height: 400 },
  { src: 'designstuff.png',   width: 1200, height: 400 },
  // Profile image — displayed at max 112px, 2x retina = 224px
  { src: 'IMG_522556.jpg',    width: 224,  height: 224 },
];

let saved = 0;

for (const config of imageConfigs) {
  const srcPath = join(IMAGES_DIR, config.src);
  const destName = basename(config.src, extname(config.src)) + '.webp';
  const destPath = join(IMAGES_DIR, destName);

  try {
    const srcStat = await stat(srcPath);
    const originalKiB = (srcStat.size / 1024).toFixed(1);

    await sharp(srcPath)
      .resize(config.width, config.height, {
        fit: 'inside',        // preserve aspect ratio, never upscale
        withoutEnlargement: true,
      })
      .webp({ quality: 82 })
      .toFile(destPath);

    const destStat = await stat(destPath);
    const newKiB = (destStat.size / 1024).toFixed(1);
    const pct = (((srcStat.size - destStat.size) / srcStat.size) * 100).toFixed(0);
    saved += srcStat.size - destStat.size;
    console.log(`✓ ${config.src} → ${destName}  ${originalKiB} KiB → ${newKiB} KiB  (${pct}% smaller)`);
  } catch (err) {
    console.warn(`⚠ Skipped ${config.src}: ${err.message}`);
  }
}

console.log(`\nTotal saved: ${(saved / 1024).toFixed(0)} KiB`);
