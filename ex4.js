const fs = require("fs");
const http = require("http");
const url = require("url");
const host = "localhost";
const port = 8000;

function renderHTML(path, res) {
  fs.readFile(path, null, function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("File not found!");
    } else {
      res.write(data);
    }
  });
}

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/html");

  let path = url.parse(req.url).pathname;

  switch (path) {
    case "/":
      res.writeHead(200);
      renderHTML("./index.html", res);
      break;
    case "/about":
      renderHTML("./about.html", res);
      break;
    default:
      res.writeHead(404);
      res.write("404 mistake - route not defined");
      res.end();
  }
};

//Creat a server and use it for listening requests
const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

//После создания сервера мы должны привязать его к сетевому адресу. Для этого мы используем метод server.listen().
// fs.promises
//   .readFile(__dirname + "/index.html")
//   .then((contents) => {
//     indexFile = contents;
//     server.listen(port, host, () => {
//       console.log(`Server is running on http://${host}:${port}`);
//     });
//   })
//   .catch((err) => {
//     console.error(`Could not read index.html file: ${err}`);
//     process.exit(1);
//   });

//   fs.promises
//   .readFile(__dirname + "/about.html")
//   .then((contents) => {
//     aboutFile = contents;
//     server.listen(port, host, () => {
//       console.log(`Server is running on http://${host}:${port}`);
//     });
//   })
//   .catch((err) => {
//     console.error(`Could not read index.html file: ${err}`);
//     process.exit(1);
//   });

// function about(req, res) {
//   res.end("About");
// }
// function about2(req, res) {
//   res.end("About");
// }
