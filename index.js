const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;

    console.log('Request URL:', url);

    // using if-else statement

    if (url == '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Hello World!</h1>');
    } else if (url == '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>About Us</h1>');
    } else if (url == '/contact') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Contact Us</h1>');
    } else if (url == '/doc.txt') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('This is a sample text file');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Page not found');
    }    

    // using switch statement

    // switch (url) {
    //     case '/':
    //         res.statusCode = 200;
    //         res.setHeader('content-Type', 'text/html');
    //         res.end('<h2>Hello World</h2>');
    //         break;
    //     case '/about':
    //         res.statusCode = 200;
    //         res.setHeader('content-Type', 'text/html');
    //         res.end('<h2>About Page</h2>');
    //         break;
    //     case '/contact':
    //         res.statusCode = 200;
    //         res.setHeader('content-Type', 'text/html');
    //         res.end('<h2>Contact Page</h2>');
    //         break;
    //     default:
    //         res.statusCode = 404;
    //         res.setHeader('content-Type', 'text/html');
    //         res.end('<h2>Page Not Found</h2>');
    // }
})
server.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
})

