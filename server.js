const express = require('express');
const app = express();
const redis = require('redis');
const bodyParser = require("body-parser");
const _dirname = "./"
const client = redis.createClient(process.env.REDIS_URL);

app.use(bodyParser.urlencoded({extended: false}));

app.get('/admin', async (req, res) => {
  client.lrange("order", 0, -1, function(err, reply) {
    return res.send(reply);
  });
});

app.post('/order', async (req, res) => {
  await client.rpush("order", JSON.stringify({ username: req.body.username, 
                                               bookname: req.body.bookname, 
                                               author: req.body.authorname,
                                               orderdate: new Date() 
                                              }));
  return res.sendFile('ordered.html', { root: _dirname });
});

app.post('/neworder', async (req, res) => {
  return res.sendFile('order.html', { root: _dirname });
});

app.get('/order', (req, res) => {
  res.sendFile('order.html', { root: _dirname });
});

app.get('/', (req, res) => {
  return res.sendFile('order.html', { root: _dirname });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
