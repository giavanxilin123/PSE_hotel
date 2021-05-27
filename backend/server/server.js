const express = require('express');
const apiRoutes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());
app.use('/api', apiRoutes);

app.listen(process.env.PORT || 3000 , () => {
    console.log(`Server is running on port: ${process.env.PORT || '3000'} `);
})