const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes for serving HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'services.html'));
});

app.get('/news', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'news.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});
app.get('/m-asca-model', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'm-asca-model.html'));
});
app.get('/terms-and-policies', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'terms-and-policies.html'));
});
app.get('/copyright-notice', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'copyright-notice.html'));
});
app.get('/privacy-policy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'privacy-policy.html'));
});
app.get('/policies', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'policies.html'));
});
app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'products.html'));
});
app.get('/savings-and-credit', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'savings-and-credit.html'));
});
app.get('agribusiness', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'agribusiness.html'));
});
app.get('/health-insurance', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'health-insurance.html'));
});
app.get('/business-opportunities', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'business-opportunities.html'));
});
app.get('/downloads', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'downloads.html'));
});
app.get('/our-team', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'our-team.html'));
});
app.get('/who-we-are', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'who-we-are.html'));
});
app.get('/partners', (req, res) =>{
  res.sendFile(path.join(__dirname, 'public','partners.html' ))
})
app.get('/loans', (req, res) =>{
  res.sendFile(path.join(__dirname, 'public','loans.html' ))
})

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});