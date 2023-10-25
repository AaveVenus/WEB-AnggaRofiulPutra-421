import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

// Routing untuk Home
app.get('/', (req, res) => {
  const content = ReactDOMServer.renderToString(<Home />);
  res.render('index', { content });
});

// Routing untuk About
app.get('/about', (req, res) => {
  const content = ReactDOMServer.renderToString(<About />);
  res.render('index', { content });
});

// Routing untuk Contact
app.get('/contact', (req, res) => {
  const content = ReactDOMServer.renderToString(<Contact />);
  res.render('index', { content });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
