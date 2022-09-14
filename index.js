import express from 'express';
import bodyParser from 'body-parser';
import quotes from "./quotes-list.js";
import cors from 'cors';
import path from 'path';

const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: '*',
    credentials: true
}))

app.use(express.static('public'));

// homepage
app.get('/', (req, res) => {
    res.sendFile('public/index.html');
});

// all quotes

app.get('/quotes', (req, res) => {
    res.send(quotes);
})

// get random quote

app.get('/quotes/random', (req, res) => {
    res.send(getRandom())
})

function getRandom() {
    let index = Math.floor(Math.random() * (quotes.length))
    return quotes[index]
}

// get all quotes about specific subject

app.get('/quotes/:subject', (req, res) => {
    res.send(getQuoteBySubject(req.params.subject))
})

function getQuoteBySubject(subject) {
    let subjectFound = quotes.filter((obj) => {
        return obj.subject === subject;
    })
    if (!subjectFound.length) return ('Sorry, not found. :(')
    return subjectFound;
}

// get quote by id

app.get('/quotes/id/:id', (req, res) => {
    res.send(getQuoteByID(req.params.id))
})

function getQuoteByID(id) {
    let IDFound = quotes.find((obj) => {
        return obj.id == id;
    })
    console.log(IDFound)
    if (!IDFound) return ('Sorry, not found. :(')
    return IDFound;
}

app.listen(process.env.PORT || 5000, () => console.log(`Server running on port: http://localhost:5000`));