// Q.1 Bui:d a Server Using Http Modu:e Node<S with api endpoints for Getting Products Dat9
// " ‘/’G →G send msg as “We:come to Men & Women Dummy Data”F
// " G‘/men’ →G send 10 products data of menF
// " ‘/women’G →G send 10 products data of wome;
// " ‘/other’G → send response as page not found
// Hin#: You can use any data, send data in json format


const http = require('http');

const PORT = 5032;
const HOSTNAME = 'localhost';

const menProducts = [
    {
        id: 1,
        name: 'nitin',
        brand: 'lewis',
        price: 19.90,
        color: 'blue',
        size: 'M',
        category: 'clothing'
    },
    {
        id: 2,
        name: 'rahul',
        brand: 'lewis',
        price: 24.90,
        color: 'orange',
        size: 'M',
        category: 'clothing'
    },
    {
        id: 3,
        name: 'mohan',
        brand: 'nike',
        price: 18.90,
        color: 'yellow',
        size: 'M',
        category: 'clothing'
    }
]
const womenProducts = [
    {
        id: 1,
        name: 'neha',
        brand: 'lewis',
        price: 19.90,
        color: 'blue',
        size: 'F',
        category: 'clothing'
    },
    {
        id: 2,
        name: 'rani',
        brand: 'reebok',
        price: 17.90,
        color: 'green',
        size: 'F',
        category: 'clothing'
    },
    {
        id: 3,
        name: 'pia',
        brand: 'puma',
        price: 12.90,
        color: 'white',
        size: 'F',
        category: 'clothing'
    }
]

const server = http.createServer((req, res) => {
   


    if(req.url == '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to Men & Women Dummy Data');
   }
else if( req.url == '/men') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
res.end(JSON.stringify(menProducts));
}

else if(req.url == '/women') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json'); 
    res.end(JSON.stringify(womenProducts));
}

else if(req.url == '/other') {
    res.statusCode = 500;
res.setHeader('Content-Type', 'text/plain');
res.end("send response as page not found"); 
}

});


server.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
})


