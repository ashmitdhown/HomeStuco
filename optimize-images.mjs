import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folders = [
  'public/assets',
  'public/assets/Club-members',
  'public/assets/councilphotos',
  'public/assets/MERCH'
];

async function optimizeImages() {
  for (const folder of folders) {
    const files = [
      path.join(__dirname, folder, '*.jpg'),
      path.join(__dirname, folder, '*.jpeg'),
      path.join(__dirname, folder, '*.png'),
      path.join(__dirname, folder, '*.JPG'),
      path.join(__dirname, folder, '*.webp'),
      path.join(__dirname, folder, '*.avif')
    ];
    await imagemin(files, {
      destination: path.join(__dirname, folder),
      plugins: [
        imageminMozjpeg({quality: 70}),
        imageminPngquant({quality: [0.6, 0.8]}),
        imageminWebp({quality: 70})
      ]
    });
    console.log(`Optimized images in ${folder}`);
  }
}

optimizeImages();
