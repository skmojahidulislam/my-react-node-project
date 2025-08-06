const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/api/products', (req, res) => {
  res.json({
    products: [
      { name: 'Kurta' },
      { name: 'T-shirt' },
      { name: 'Shoes' },
    ]
  });
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
});
