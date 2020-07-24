const scaleApp = require('./utils/scaleApp');
const serverApp = require('./server');
const appRoutes = require('./utils/server/app-routes');

var MySandbox = function(core, instanceId, options, moduleId) {

    // e.g. provide the Mediator methods 'on', 'emit', etc.
    core._mediator.installTo(this);

    // maybe you'd like to expose the instance ID
    this.id = instanceId;
  
    return this;
};


var core = new scaleApp.Core(MySandbox);

core.register("serverApp", serverApp);
core.register("appRoutes", appRoutes);

core.start( "appRoutes" );
core.start( "serverApp" );