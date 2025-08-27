import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

// List of large images to compress
const images = [
  'public/assets/aboutsmall.png',
  'public/assets/Club-members/Nishit.webp',
  'public/assets/Club-members/Varnikka_rotated.webp',
  'public/assets/Club-members/Varnikka.webp',
  'public/assets/Club-members/Vidyullekha.jpeg',
  'public/assets/Club-members/Vidyullekha.webp',
  'public/assets/sparks.webp',
  // Add more if needed
];

const outputDir = 'public/assets/compressed';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const compressImage = async (inputPath) => {
  const ext = path.extname(inputPath).toLowerCase();
  const base = path.basename(inputPath, ext);
  const outputPath = path.join(outputDir, base + '.webp');
  try {
    await sharp(inputPath)
      .webp({ quality: 70 }) // Adjust quality for <500KB
      .toFile(outputPath);
    console.log(`Compressed: ${inputPath} -> ${outputPath}`);
  } catch (err) {
    console.error(`Error compressing ${inputPath}:`, err);
  }
};

(async () => {
  for (const img of images) {
    await compressImage(img);
  }
})();
