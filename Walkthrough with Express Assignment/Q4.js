const express = require('express');
const app = express();


app.get('/', (req, res) => {
    let randomNumber = Math.floor(Math.random() * 100) +1;
    res.json({RandomNumber: randomNumber});
})

const port = 3328;
app.listen(port,() => {
    console.log(`The server is running on http://localhost:${port}`);
})
