// const http = require('http');

const express = require('express')

const handleAllRequest = (requestObject, responseObject) => {
    const url = requestObject.url;
    responseObject.setHeader('content-type', 'text/html');
    if (url === '/signup') {
        responseObject.send('<h1>Welcome to signup page</h1>');
    }else if (url === '/login'){
        responseObject.send('<h1>Login page</h1>');
    }else if (url === '/contact'){
        responseObject.send('<h1>contact page</h1>');
    }else if (url === '/'){
        responseObject.send('<h1>home page</h1>');
    }else{
        responseObject.send('404 page not found');
    }
}

// const sever = http.createServer(handleAllRequest);
const server = express();

// server.use(handleAllRequest);

const handleGetLogin = (req, res) => {
    res.send('This is login get')
};

const handleLoginPut = (req, res) => {
    res.send('This is a login put')
};
const handleLoginDelete = (req, res) => {
    res.send('This is login delete')
};
const handleLoginPost = (req, res) => {
    res.send('This is login post')
};

server.get('/login', handleGetLogin);
server.put('/login', handleLoginPut);
server.delete('/login', handleLoginDelete);
server.post('/login', handleLoginPost);

server.listen(3000, '127.0.0.1', ()=>{
    console.log('server is running');
});