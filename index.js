const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) =>{
  const userAgent = req.headers['user-agent'];
  const regex = /\((.+)\)/g;
  res.json({
    yourIP: req.ip,
    yourLanguage: req.headers['accept-language'].split(',')[0],
    yourSystem: regex.exec(userAgent)[1],
    codedBy: 'https://www.dcmf.hu'
  });
}).listen(port, () =>{
  console.log('Server is running on port ' + port);
});