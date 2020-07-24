function handleAppRoutes( {app, server} ){
    server.get('/', (req, res) => {
        return app.render(req, res, '/index', req.query)
    });
}


function appRoutes(sandbox){
    return {
        init: function(){
            sandbox.on("getAppRoutes", handleAppRoutes);
        },

        destroy: function(){
            sandbox.off("getAppRoutes");
        }
    }
}


module.exports = appRoutes;