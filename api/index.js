const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(
      200,
      { "Content-Type": "text/html" },
      { "Access-Control-Allow-Origin": "*" },
      { "Access-Control-Allow-Methods": "GET" },
      { "Access-Control-Allow-Headers": "Content-Type" },
      { "Access-Control-Max-Age": "3600" },
      { "Access-Control-Allow-Credentials": true },
    ),
      res.end(`
      <script>
        console.log('JavaScript code is running!');
        alert('JavaScript code is running!');
      </script>
      `);
  })
  .listen(3000);
