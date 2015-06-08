import jq = require('jquery');
// Note "cannot compile external modules unless the "--module" flag is provided." 
// This is resolved by adding a tsconfig.js to the root of the project.
module App {
    "use strict";
    /**
    * jQueryVersion is used to test if jQuery will display a version number in the console
    **/
    export function jQueryVersion(){
        console.log("jQueryVersion Called. jQuery Version = " + jq.fn.jquery);
        
    }
}
export = App;