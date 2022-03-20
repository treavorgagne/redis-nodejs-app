const express = require('express');
const app = express();

const redisClient = require('./redis-client'); 

app.get('/order', async (req,res) => {
    console.log('Add user orders to cache page');
    const { key } = 1;
    const value = "BAR";
    await redisClient.setAsync(key, JSON.stringify(value));
    return res.send(`Success`);
});

app.get('/admin', async (req,res) => {
    console.log('Get user orders from cache for admins');
    const { key } = 1;
    const value = await redisClient.getAsync(key);
    return res.json(JSON.parse(value));
});

app.get('/', (req,res) => {
    return res.send("HELLO WORLD")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});