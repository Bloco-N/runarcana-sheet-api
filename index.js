const express = require('express');
const app = express();
const router = require('./routes');
const cors = require('cors')
require('dotenv').config()

app.use(cors())

app.use(express.json());

app.use(router)

app.get('/', (req, res) => {
  res.json('Hello World')
})


app.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));