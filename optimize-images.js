const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');
const path = require('path');

const folders = [
  'public/assets',
  'public/assets/Club-members',
  'public/assets/councilphotos',
  'public/assets/MERCH'
];

async function optimizeImages() {
  for (const folder of folders) {
    const files = [
      path.join(folder, '*.jpg'),
      path.join(folder, '*.jpeg'),
      path.join(folder, '*.png'),
      path.join(folder, '*.JPG'),
      path.join(folder, '*.webp'),
      path.join(folder, '*.avif')
    ];
    await imagemin(files, {
      destination: folder,
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
