const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);

// placeholder transactions route (protected)
app.get('/transactions', (req, res) => {
  // TODO: pull from DB, check token
  res.json([{ id: 1, title: 'Test Escrow', amount: 1000, status: 'holding' }]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
