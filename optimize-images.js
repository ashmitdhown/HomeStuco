// This script compresses images in public/assets/ and outputs to public/assets/compressed/
// Usage: node optimize-images.js

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');


const inputDir = path.join(__dirname, 'public/assets');
const outputDir = path.join(inputDir, 'compressed');

let processedCount = 0;
let skippedCount = 0;
let errorCount = 0;
let errorFiles = [];

function isImage(file) {
  return /\.(png|jpe?g|webp)$/i.test(file);
}

function compressImage(inputPath, outputPath) {
  // Skip if already compressed
  if (fs.existsSync(outputPath)) {
    skippedCount++;
    return Promise.resolve();
  }
  // Compress to both WebP and AVIF
  const webpPromise = sharp(inputPath)
    .webp({ quality: 75 })
    .toFile(outputPath.replace('.webp', '.webp'), (err, info) => {
      if (err) {
        errorCount++;
        errorFiles.push(inputPath);
        console.error(`Error compressing (WebP) ${inputPath}:`, err);
      } else {
        processedCount++;
        console.log(`Compressed (WebP): ${outputPath.replace('.webp', '.webp')}`);
      }
    });
  const avifPromise = sharp(inputPath)
    .avif({ quality: 50 })
    .toFile(outputPath.replace('.webp', '.avif'), (err, info) => {
      if (err) {
        errorCount++;
        errorFiles.push(inputPath);
        console.error(`Error compressing (AVIF) ${inputPath}:`, err);
      } else {
        processedCount++;
        console.log(`Compressed (AVIF): ${outputPath.replace('.webp', '.avif')}`);
      }
    });
  return Promise.all([webpPromise, avifPromise]);
}

function processDir(dir) {
  const promises = [];
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const relPath = path.relative(inputDir, fullPath);
    const outPath = path.join(outputDir, relPath.replace(/\.[^.]+$/, '.webp'));
    if (fs.statSync(fullPath).isDirectory()) {
      if (!fs.existsSync(path.join(outputDir, relPath))) {
        fs.mkdirSync(path.join(outputDir, relPath), { recursive: true });
      }
      processDir(fullPath);
    } else if (isImage(file)) {
      try {
        promises.push(compressImage(fullPath, outPath));
      } catch (err) {
        errorCount++;
        errorFiles.push(fullPath);
        console.error(`Error processing ${fullPath}:`, err);
      }
    }
  });
  return Promise.all(promises);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}



processDir(inputDir).then(() => {
  console.log('Image compression finished.');
  console.log(`Processed: ${processedCount}`);
  console.log(`Skipped (already compressed): ${skippedCount}`);
  console.log(`Errors: ${errorCount}`);
  if (errorFiles.length > 0) {
    console.log('Files with errors:');
    errorFiles.forEach(f => console.log(f));
  }
});
