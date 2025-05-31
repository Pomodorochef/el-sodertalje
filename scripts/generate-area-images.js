import fs from 'fs';
import { createCanvas } from 'canvas';

const areas = [
  { id: 'overview', name: 'Översikt' },
  { id: 'sodertalje', name: 'Södertälje' },
  { id: 'jarna', name: 'Järna' },
  { id: 'holo', name: 'Hölö' },
  { id: 'pershagen', name: 'Pershagen' },
  { id: 'ostertalje', name: 'Östertälje' },
];

// Create directory if it doesn't exist
if (!fs.existsSync('public/images/areas')) {
  fs.mkdirSync('public/images/areas', { recursive: true });
}

// Generate images
areas.forEach(area => {
  const width = 1200;
  const height = 675;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Set background
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 60px -apple-system, system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`Elektriker i ${area.name}`, width / 2, height / 2);

  // Save image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(`public/images/areas/${area.id}.jpg`, buffer);
});

console.log('Area images generated successfully!'); 