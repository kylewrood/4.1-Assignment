const http = require("http");
const { type } = require("os");
const url = require("url");

const endpoints = [
    "/profile", "/products", "/cart", "/register", "/login"
]


const products = [
    "milk","eggs","cheese","pork","shrimp","chicken"
]


http .createServer((req,res) => {
    res.writeHead(200, {"Content-Type":"text/html"});
    let path = url.parse(req.url).pathname;
    let query = url.parse(req.url, true).query;
    let resText = "";

    if (endpoints.includes(path)) {
         if (path = "/products" && query.search !== undefined) {
            resText = products.includes(query.search) ? "<h1>Product ${query.search} found.</h1>" : "<h1>Product ${query.search} was not found.</h1>"
        } else if (
            resText = "<h1>This is ${path} page.</h1>"
         ) {
            resText = "<h1>This page is not found</h1>"
        }
            res.write(resText);
            res.end(); 
    }
})
.listen(8080)