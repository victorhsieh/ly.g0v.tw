module.exports = (karma) ->
  karma.set do
    basePath: "../"
    frameworks: ["mocha", "chai"]
    files:
      * "bower_components/jquery/jquery.js"
      * "bower_components/angular/angular.js"
      * "bower_components/angular-ui-router/release/angular-ui-router.js"
      * "_public/js/vendor.js"
      * "_public/js/templates.js"
      * "_public/js/app.js"
      * "bower_components/angular-mocks/angular-mocks.js"
      * "test/unit/**/*.spec.*"
    exclude: []
    reporters: ["progress"]
    port: 9876
    runnerPort: 9100
    colors: true
    logLevel: karma.LOG_INFO
    autoWatch: true
    browsers: ["Chrome"]
    captureTimeout: 60000
    #plugins: ["karma-jasmine", "karma-live-preprocessor", "karma-chrome-launcher"]
    preprocessors: {
        '**/*.ls': ['live']
    }
    singleRun: false

