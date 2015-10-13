/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'my-kanban-board',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    // CORS configuration for test environment
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src':  "'self' 'unsafe-eval' http",
      'font-src':    "'self'",
      'connect-src': "'self' *",
      'img-src':     "'self' data:",
      'style-src':   "'self' 'unsafe-inline'",
      'object-src':  "'self' data:",
      'media-src':   "'self'"
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    // ENV.contentSecurityPolicy['script-src'] += "http://*:35729"
    // ENV.contentSecurityPolicy['img-src'] += " http://localhost:3000"
    // ENV.contentSecurityPolicy['connect-src'] += " http://localhost:3000 ws://127.0.0.1:* ws://ws.pusherapp.com";
    // ENV.contentSecurityPolicy['script-src'] += "  http://stats.pusher.com http://js-agent.newrelic.com http://bam.nr-data.net";
    // // alter the content security policy for dev
    // ENV.contentSecurityPolicy = {
    //   'default-src': "'none'",
    //   'script-src': "'self' 'unsafe-inline'",
    //   'font-src': "'self'",
    //   'connect-src': "'self'",
    //   'img-src': "'self' data:",
    //   'style-src': "'self' 'unsafe-inline'",
    //   'media-src': "'self'"
  }



  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    ENV.contentSecurityPolicy['script-src'] += "http://*:35729"

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
