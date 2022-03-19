const express = require('express');
const app = express();

const redisClient = require('./redis-client');

app.get('/', (req,res) => {
    console.log('Add user orders to cache page');
    return res.send('hello world');
});

// app.get('/admin', (req,res) => {
//     console.log('Get user orders from cache for admins');
//     return res.send('admin hello world');
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server listening on port ${PORT}');
});