const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handle = app.getRequestHandler();

function initServer(sandbox){
    app.prepare().then(() => {
        const server = express();

        sandbox.emit("getAppRoutes", {app, server});

        server.all('*', (req, res) => {
          return handle(req, res);
        });
      
        server.listen(port, (err) => {
          if (err) throw err
          console.log(`> Ready on http://localhost:${port}`);
        });
      
    });
}


function serverApp(sandbox){
    return {
        init: function(){
            initServer(sandbox);
        }
    }
}


module.exports = serverApp;