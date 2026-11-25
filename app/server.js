const http = require("http");

const PORT = process.env.PORT || 3006;
const VERSION = process.env.APP_VERSION || "v1";

function createServer() {
    return http.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/plain" });

        res.end(`Task-10 CI/CD Application
Version: ${VERSION}
Status: Running Successfully
`);
    });
}

if (require.main === module) {
    createServer().listen(PORT, () => {
        console.log(`Application running on port ${PORT}`);
    });
}

module.exports = createServer;