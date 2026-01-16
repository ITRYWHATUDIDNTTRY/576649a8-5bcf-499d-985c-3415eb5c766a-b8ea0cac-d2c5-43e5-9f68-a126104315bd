const https = require('https');

https.get('https://overjoyous-subquadrangular-douglas.ngrok-free.dev', (res) => {
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Status Code:', res.statusCode);
    console.log('Response length:', data.length);
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
