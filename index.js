const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) =>{
  const userAgent = req.headers['user-agent'];
  const regex = /\((.+)\)/g;
  let ip = req.ip;
 if (ip.substr(0,7) == "::ffff:")
	ip = ip.substr(7);
  res.json({
    yourIP: ip,
    yourLanguage: req.headers['accept-language'].split(',')[0],
    yourSystem: userAgent.match(regex)[0].slice(1,-1),
    codedBy: 'https://www.dcmf.hu'
  });
}).listen(port, () =>{
  console.log('Server is running on port ' + port);
});
