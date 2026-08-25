const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url == "/") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <a href="/">Home</a> |
            <a href="/about">About</a> |
            <a href="/skills">Skills</a> |
            <a href="/projects">Projects</a> |
            <a href="/contact">Contact</a>

            <hr>

            <h1>Home</h1>
            <p>Welcome to my personal portfolio.</p>
        `);

    } else if (req.url == "/about") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <a href="/">Home</a> |
            <a href="/about">About</a> |
            <a href="/skills">Skills</a> |
            <a href="/projects">Projects</a> |
            <a href="/contact">Contact</a>

            <hr>

            <h1>About Me</h1>
            <p>My name is Varun Galgali.</p>
            <p>I am a student learning web development.</p>
        `);

    } else if (req.url == "/skills") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <a href="/">Home</a> |
            <a href="/about">About</a> |
            <a href="/skills">Skills</a> |
            <a href="/projects">Projects</a> |
            <a href="/contact">Contact</a>

            <hr>

            <h1>Skills</h1>
            <p>HTML</p>
            <p>JavaScript</p>
            <p>Node.js</p>
        `);

    } else if (req.url == "/projects") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <a href="/">Home</a> |
            <a href="/about">About</a> |
            <a href="/skills">Skills</a> |
            <a href="/projects">Projects</a> |
            <a href="/contact">Contact</a>

            <hr>

            <h1>Projects</h1>
            <p>Basic HTTP Server using Node.js</p>
            <p>Student JSON API</p>
        `);

    } else if (req.url == "/contact") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <a href="/">Home</a> |
            <a href="/about">About</a> |
            <a href="/skills">Skills</a> |
            <a href="/projects">Projects</a> |
            <a href="/contact">Contact</a>

            <hr>

            <h1>Contact Details</h1>
            <p>Email: varun@gmail.com</p>
        `);

    } else {

        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end(`
            <a href="/">Home</a> |
            <a href="/about">About</a> |
            <a href="/skills">Skills</a> |
            <a href="/projects">Projects</a> |
            <a href="/contact">Contact</a>

            <hr>

            <h1>404 - Page Not Found</h1>
        `);

    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});