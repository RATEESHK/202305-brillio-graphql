let books = require('./data/books');

module.exports = (app) => {
    app.get('/app/books', (req,res)=>{
        res.json(books);
    })
}