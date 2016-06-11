var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/.spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    
    /**
    RequireJS loads all code relative to a baseUrl. 
    The baseUrl is normally set to the same directory as the script used in a data-main attribute 
    for the top level script to load for a page. 
    The data-main attribute is a special attribute that require.js will check to start script loading.
    This example will end up with a baseUrl of scripts:
    **/
    baseUrl: '../../',

    paths: {
        'lib' : 'lib/',
        'algorithm' : 'src/algorithm'
    },

    shim: {},

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});