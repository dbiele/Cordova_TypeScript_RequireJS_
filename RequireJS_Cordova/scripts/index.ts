/// <reference path='typings/requirejs/require.d.ts' />
import App = require('./app');
requirejs.config({
    baseUrl: 'scripts',
    paths: {
        jquery: 'jquery'
    }

    //only use shim config for non- AMD scripts,
    //scripts that do not already call define(). The shim
    //config will not work correctly if used on AMD scripts,
    //in particular, the exports and init config will not
    //be triggered, and the deps config will be confusing
    //for those cases.
});
requirejs(['../cordova'], () => {
    //This function will be called when all the dependencies
    //listed above are loaded. Note that this function could
    //be called before the page is loaded.
    App.jQueryVersion();
});

// More information about RequireJS can be found @ http://requirejs.org/docs/api.html