// scripts/seed-production.js
const https = require('https');

const VERCEL_URL = process.env.VERCEL_URL || 'https://your-app.vercel.app';
const SEED_KEY = process.env.SEED_KEY || 'your-seed-key-here';

async function seedProduction() {
  const data = JSON.stringify({
    seedKey: SEED_KEY
  });

  const options = {
    hostname: VERCEL_URL.replace('https://', '').replace('http://', ''),
    port: 443,
    path: '/api/seed',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log('✅ Database seeded successfully!');
          console.log('Response:', JSON.parse(responseData));
          resolve(responseData);
        } else {
          console.error('❌ Failed to seed database');
          console.error('Status:', res.statusCode);
          console.error('Response:', responseData);
          reject(new Error(`HTTP ${res.statusCode}: ${responseData}`));
        }
      });
    });

    req.on('error', (error) => {
      console.error('❌ Request error:', error);
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

// Run the seeding
console.log('🌱 Starting database seeding...');
console.log('🎯 Target URL:', VERCEL_URL);
console.log('🔑 Using seed key:', SEED_KEY ? 'PROVIDED' : 'MISSING');

seedProduction()
  .then(() => {
    console.log('✨ Seeding completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Seeding failed:', error.message);
    process.exit(1);
  });
