require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const swaggerSetup = require('./swagger');
const rateLimit = require('./middlewares/rateLimit');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(rateLimit);
app.use('/api', routes);
swaggerSetup(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
