// Q.3_Create a Basic Server with Different Routes using Express
// " `/`G G → send response as {msg:`I am homepage`^
// " `/about`G → send response as {msg:`I am about page`^
// " `/contact ` → send response as {emai::`suppor#@pwskills.com`}


const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.json({msg: 'I am homepage'});
});

app.get('/about', (req,res) => {
    res.json({msg: `I am about page`});
});

app.get('/contact', (req,res) => {
    res.json({email: `support@pwskills.com`});
});

const port = 3348;
app.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`);
})
