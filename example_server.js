const http = require('http');
const fs = require('fs');
const homePage = fs.readFileSync("index.html");
const aboutPage = fs.readFileSync("about.html");
const contactPage = fs.readFileSync("contact.html");
const notFoundPage = fs.readFileSync("notFound.html");

const server = http.createServer(
  (request, response) => {
    if(request.url === '/about'){
    //console.log(request.url);
    response.end("About")
  } else if(request.url === '/login'){
    response.end('Login');
  }
    else if (request.url === '/logout'){
      response.end('Log out')
    
  }
  else {
    response.writeHead(404); //sends status code of the response
    response.end('Page Not Found')
  }
  }
  );

  server.listen(8080);
  console.log("Listening on port 8080 ");