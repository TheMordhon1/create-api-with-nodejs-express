const express = require('express');
const request = require('request-promise');


const app = express();
const PORT = process.env.PORT || 406;

const apiKey = 'c34f7f4cce932d87f42abc3b37e3ecd2';
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Welcome to My API')
})

/* Get Product Details */
app.get('/product/:productId', async (req,res) => {
    const {productId}= req.params;

    try {
        const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`);

        res.json(response)
    } catch (error) {
        res.json(error)
    }
})


app.listen(PORT, () => console.log(`Server running on post ${PORT}`));