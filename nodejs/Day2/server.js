const http=require("node:http");
const fs =require('node:fs');
const path=require('node:path');
const PORT = 3000;
const server=http.createServer((req,res)=>{
    switch(req.url){
        case "/":
            const page= fs.readFileSync("./public/index.html")
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(page);
        break;
 case "/style.css":
    const style=fs.readFileSync("./public/style.css");
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/css');
    res.end(style);
    break;
    case "/sad.jpg":
        const image=fs.readFileSync("./public/sad.jpg");
        res.statusCode=200;
        res.setHeader('Content-Type', 'text/image.jpg');
        res.end(image);

    
    break;
    case "/bitset.mp4":
        const video= fs.readFileSync("./public/bitset.mp4")
        res.statusCode = 200;
        res.setHeader('Content-Type', 'video/mp4');
        res.end(video);
    break;
    case '/json':
        const data= fs.readFileSync("./public/data.json")
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
    break;
    default:
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('page not found');
    }
})
server.listen(PORT,()=>{
    console.log(`server is running on local host on port ${PORT}`);
})