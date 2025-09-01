const https = require('https');

const data = JSON.stringify({
  seedKey: 'default-seed-key-2024'
});

const options = {
  hostname: 'balloond-website.vercel.app',
  port: 443,
  path: '/api/seed',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
    'User-Agent': 'Node.js/18.0.0'
  }
};

console.log('🌱 Attempting to seed database...');

const req = https.request(options, (res) => {
  let responseData = '';

  res.on('data', (chunk) => {
    responseData += chunk;
  });

  res.on('end', () => {
    console.log('Status Code:', res.statusCode);
    console.log('Response:', responseData);
    
    if (res.statusCode === 200) {
      const result = JSON.parse(responseData);
      console.log('✅ Success! Database seeded successfully!');
      console.log('Admin email:', result.admin?.email || 'admin@balloond.com');
      console.log('Admin login: https://www.balloond.co/admin');
    } else {
      console.log('❌ Error:', res.statusCode, responseData);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Request failed:', error);
});

req.write(data);
req.end();
