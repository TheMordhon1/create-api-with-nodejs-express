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


app.listen(PORT, () => console.log(`Server running on post ${PORT}`));