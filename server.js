'use strict';

const Hapi=require('hapi');
// Create server with host and port

const server=Hapi.server({
    host:'localhost',
    port:8000
});
//Add the route
server.route({
    method: 'GET',
    path:'/hello',
    handler:function(request,h) {
        return 'hello world';
    }
});

//Add another route
server.route({
    method: 'GET',
    path:'/{name}',
    handler:function(request,h) {
        return 'hello ' + encodeURIComponent(request.params.name) + '!';
    }
});

//Add another route
server.route({
    method:'GET',
    path:'/',
    handler:function(request,h){
        return 'home page';
    }
    });
// Start the server
const start = async function(){
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Server running at:',server.info.uri);
}

start();
