const http = require("http");
const server = http.createServer((req, res) => { console.log(req.url, req.method, req.headers);
// process.exit();
res.setHeader("Content-Type", "text/html"); res.write("<html>");
res.write("<head><title>My First Page</title></head>"); res.write("<body><h1>Hello From Node.js Server!</h1></body>"); res.write("</html>");
res.end();
});
server.listen(3000);


const http = require("http");
const server = http.createServer((req, res) => { const url = req.url;
if (url === "/") {
res.setHeader("Content-Type", "text/html"); res.write("<html>"); res.write("<head><title>Server</title></head>"); res.write(
'<body><form action="/message" method="POST"><input type="text" value=""></form></body>'
);
res.write("</html>"); return res.end();
} else if (url === "/secondserver") { res.setHeader("Content-Type", "text/html"); res.write("<html>");
res.write("<head><title>Server Page second</title></head>"); res.write("<body><h2>Welcome to the Internet</h2></body>"); res.write("</html>");
res.end();
}
res.setHeader("Content-Type", "text/html"); res.write("<html>");
res.write("<head><title>Server Page second</title></head>"); res.write("<body><h2>Welcome to the Internet</h2></body>"); res.write("</html>");
res.end();
});
server.listen(3000);


const http = require("http"); 
const fs = require("fs");
const server = http.createServer((req, res) => { const url = req.url;
const method = req.method; if (url === "/") {
res.setHeader("Content-Type", "text/html"); res.write("<html>"); res.write("<head><title>Server</title></head>"); res.write(
'<body><form action="/message" method="POST"><input type="text" value=""></form></body>'
);
res.write("</html>");
return res.end();
}
if (url === "/message" &amp;&amp; method === "POST") { fs.writeFileSync("testing.txt", "YOLO WORLD"); res.statusCode = 302; res.setHeader("Location", "/");
return res.end();
}
res.setHeader("Content-Type", "text/html"); res.write("<html>");
res.write("<head><title>Server Page second</title></head>"); res.write("<body><h2>Welcome to the Internet</h2></body>"); res.write("</html>");
res.end();
});
server.listen(3000);


const http = require("http"); 
const fs = require("fs");
const server = http.createServer((req, res) => { const url = req.url;
const method = req.method; if (url === "/") {
res.write("<html>"); res.write("<head><title>Server</title></head>"); res.write(
'<body><form action="/message" method="POST"><input type="text" name="message" value=""></form></body>
);
res.write("</html>"); return res.end();
}
if (url === "/message" &amp;&amp; method === "POST") { const body = [];
req.on("data", (chunk) => { console.log(chunk); body.push(chunk);
});
req.on("end", () => {
const parseBody = Buffer.concat(body).toString(); const message = parseBody.split("=")[1]; fs.writeFileSync("testing.txt", message);
});
res.statusCode = 302;
res.setHeader("Location", "/"); return res.end();
}
res.setHeader("Content-Type", "text/html"); res.write("<html>");
res.write("<head><title>Server Page second</title></head>"); res.write("<body><h2>Welcome to the Internet</h2></body>"); res.write("</html>");
res.end();
});
server.listen(3000);


Router js

const fs = require("fs");
const reqHandle = (req, res) => { const url = req.url;
const method = req.method; if (url === "/") {
res.write("<html>"); res.write("<head><title>Server</title></head>"); res.write(
'<body><form action="/message" method="POST"><input type="text" name="message" value=""></form></body>'
);
res.write("</html>"); return res.end();
}
if (url === "/message" &amp;&amp; method === "POST") { const body = [];
req.on("data", (chunk) => { console.log(chunk); body.push(chunk);
});
req.on("end", () => {
const parseBody = Buffer.concat(body).toString(); const message = parseBody.split("=")[1]; fs.writeFileSync("testing.txt", message);
});
res.statusCode = 302; res.setHeader("Location", "/"); return res.end();
}
res.setHeader("Content-Type", "text/html"); res.write("<html>");
res.write("<head><title>Server Page second</title></head>"); res.write("<body><h2>Welcome to the Internet</h2></body>"); res.write("</html>");
res.end();
};
exports.handle = reqHandle;


const express = require("express");
 const http = require("http");
const app = express();
app.use((req, res, next) => { console.log("In the middleware"); next();
});
app.use((req, res, next) => { console.log("In another middleware");
//	next();
});
const server = http.createServer(app);
server.listen(5000);


const express = require("express"); 
const http = require("http");
const app = express();
app.use((req, res, next) => { console.log("In the middleware"); next();
});
app.use((req, res, next) => { console.log("In another middleware"); res.send("<h1>Hello from express</h1>");
//	next();
});
const server = http.createServer(app);
server.listen(5000);


const express = require("express"); const app = express();
app.use((req, res, next) => { console.log("In the middleware"); next();
});
app.use((req, res, next) => { console.log("In another middleware"); res.send("<h1>Hello from express</h1>");
//	next();
});
app.listen(5000);


const express = require("express");
const router = express.Router();
router.get("/add-product", (req, res, next) => { res.send(
`<form action="/product/add-product" method="POST">
<input type="text" name="title">
<button type="submit">Create Product</button>
</form>`
);
});
router.post("/add-product", (req, res, next) => { console.log(req.body);
res.redirect("/");
});
module.exports = router;


const express = require("express");
const bodyParser = require("body-parser");
const shopRoutes = require("./routes/shop.routes.js");
const productRoutes = require("./routes/product.routes.js");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/product", productRoutes); app.use(shopRoutes);
app.listen(5000);


const express = require("express");
const router = express.Router();
router.get("/", (req, res, next) => { res.send("<h1>Hello there</h1>");
});
module.exports = router;


