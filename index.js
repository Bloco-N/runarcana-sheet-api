const express = require('express');
const app = express();
const router = require('./routes');
require('dotenv').config()

app.use(express.json());

app.use('/spells', router)

app.get('/', (req, res) => {
  res.json('Hello World')
})


app.listen(process.env.PORT || 8000, () => console.log(`server listening on port ${process.env.PORT || 8000}`));