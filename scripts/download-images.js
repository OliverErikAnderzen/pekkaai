const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const images = [
  {
    name: 'grammarly',
    url: 'https://picsum.photos/seed/grammarly/800/600'
  },
  {
    name: 'jasper',
    url: 'https://picsum.photos/seed/jasper/800/600'
  },
  {
    name: 'synthesia',
    url: 'https://picsum.photos/seed/synthesia/800/600'
  },
  {
    name: 'replika',
    url: 'https://picsum.photos/seed/replika/800/600'
  },
  {
    name: 'notion',
    url: 'https://picsum.photos/seed/notion/800/600'
  },
  {
    name: 'duolingo',
    url: 'https://picsum.photos/seed/duolingo/800/600'
  }
];

const imagesDir = path.join(__dirname, '../public/images');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const downloadImage = async (image) => {
  try {
    const response = await fetch(image.url);
    if (!response.ok) throw new Error(`Failed to fetch ${image.name}`);
    
    const buffer = await response.buffer();
    const outputPath = path.join(__dirname, '../public/images', `${image.name}.jpg`);
    
    fs.writeFileSync(outputPath, buffer);
    console.log(`Downloaded ${image.name}.jpg`);
  } catch (error) {
    console.error(`Error downloading ${image.name}:`, error);
  }
};

const downloadAllImages = async () => {
  for (const image of images) {
    await downloadImage(image);
  }
};

downloadAllImages(); 