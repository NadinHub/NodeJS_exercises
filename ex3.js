// Create a .txt file that will represent a blog post, you can use Lorem Ipsum text.
//Create a simple server that when you visit the home page it will return the contents of a txt file.

const fs = require("fs");
const cp = require("child_process");
const http = require("http");
const host = 'localhost';
const port = 8000;
const post = ` Lorem Ipsum `;

//Creat a .txt file that will represent a blog post, use Lorem Ipsum text
fs.writeFileSync(`post.txt`, post, (err) => {
    if (err) console.log(err);
  });


const requestListener = function (req, res) {
    fs.promises.readFile(__dirname + "/index.html")
    .then (contents =>{
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);
    })
    .catch(err => {
        res.writeHead(500);
        res.end(err);
        return;
    });
};

//Creat a server and use it for listening requests 
//После создания сервера мы должны привязать его к сетевому адресу. Для этого мы используем метод server.listen().
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});



// const ReadStream = fs.createReadStream("./post.txt", "UTF-8");

// ReadStream.once("data", data => {
//     console.log(data);
// })

// cp.exec("open ./index.html", () => {
//   ReadStream.once("data", (data) => {
//     console.log(`Content of a txt file: "${data}"`);
//   });
// });






//https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module-ru 