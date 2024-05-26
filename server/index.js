// server/index.js
const express = require('express');
const cors = require('cors');
const courseRoutes = require('./routes/courseRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', courseRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
