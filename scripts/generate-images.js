import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const areas = [
  // Central areas
  { id: 'centrala-sodertalje', name: 'Centrala Södertälje' },
  { id: 'sodertalje-syd', name: 'Södertälje Syd' },
  { id: 'sodertalje-nord', name: 'Södertälje Nord' },
  
  // Districts
  { id: 'jarna', name: 'Järna' },
  { id: 'holo', name: 'Hölö' },
  { id: 'pershagen', name: 'Pershagen' },
  { id: 'ostertalje', name: 'Östertälje' },
  
  // Neighborhoods
  { id: 'brunnsang', name: 'Brunnsäng' },
  { id: 'ronna', name: 'Ronna' },
  { id: 'geneta', name: 'Geneta' },
  { id: 'hovsjo', name: 'Hovsjö' },
  { id: 'saltskog', name: 'Saltskog' },
  { id: 'rosenlund', name: 'Rosenlund' },
  { id: 'fornhojden', name: 'Fornhöjden' },
  { id: 'karlhov', name: 'Karlhov' },
  { id: 'blombacka', name: 'Blombacka' },
];

const outputDir = join(dirname(__dirname), 'public', 'images', 'areas');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate a placeholder image for each area
async function generateImages() {
  for (const area of areas) {
    const width = 1920;
    const height = 1080;
    
    // Create a gradient background with area name
    await sharp({
      create: {
        width,
        height,
        channels: 4,
        background: { r: 16, g: 185, b: 129, alpha: 1 } // primary-500 color
      }
    })
    .composite([
      {
        input: Buffer.from(`<svg width="${width}" height="${height}">
          <rect width="${width}" height="${height}" fill="url(#gradient)"/>
          <text x="50%" y="50%" text-anchor="middle" font-family="Arial" font-size="72" fill="white">${area.name}</text>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#065f46;stop-opacity:1" />
            </linearGradient>
          </defs>
        </svg>`),
        top: 0,
        left: 0
      }
    ])
    .jpeg({ quality: 90 })
    .toFile(join(outputDir, `${area.id}.jpg`));
    
    console.log(`Generated image for ${area.name}`);
  }
}

generateImages().catch(console.error); 