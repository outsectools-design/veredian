const express = require('express');
const path = require('path');

const app = express();

// Security headers middleware
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  next();
});

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Page routes
app.get(['/', '/index.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get(['/products', '/products.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'products.html'));
});

app.get(['/technology', '/technology.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'technology.html'));
});

app.get(['/markets', '/markets.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'markets.html'));
});

app.get(['/company', '/company.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'company.html'));
});

app.get(['/investors', '/investors.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'investors.html'));
});

app.get(['/news', '/news.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'news.html'));
});

app.get(['/careers', '/careers.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'careers.html'));
});

app.get(['/contact', '/contact.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get(['/deck-request', '/deck-request.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'deck-request.html'));
});

// 404 catch-all
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Veredian server running on port ${PORT}`);
});

// Export for Vercel
module.exports = app;
