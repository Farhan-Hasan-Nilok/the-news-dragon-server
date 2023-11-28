const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const categories = require('./data/categories.json');
const news = require('./data/news.json');
app.use(cors());

app.get('/', (req, res) => {
    res.send("Server is Online !!");
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const singleNews = news.find(n => n._id === id);
    res.send(singleNews);
})

app.get('/category/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(news)
    } else {
        const categoryNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(categoryNews);
    }
})

app.listen(port, () => {
    console.log(`Server is Running on port: ${port}`)
})