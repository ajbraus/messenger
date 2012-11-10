(function() {

  module.exports = {
    mongodb: {
      development: {
        name: 'messenger-development',
        port: 27017,
        host: '127.0.0.1'
      },
      test: {
        name: 'messenger-test',
        port: 27017,
        host: '127.0.0.1'
      },
      staging: {
        name: 'messenger-staging',
        port: 27017,
        host: '127.0.0.1'
      },
      production: {
        name: 'messenger-production',
        port: 27017,
        host: '127.0.0.1'
      }
    },
    redis: {
      development: {
        name: 'messenger-development',
        port: 6397,
        host: '127.0.0.1'
      },
      test: {
        name: 'messenger-test',
        port: 6397,
        host: '127.0.0.1'
      },
      staging: {
        name: 'messenger-staging',
        port: 6397,
        host: '127.0.0.1'
      },
      production: {
        name: 'messenger-production',
        port: 6397,
        host: '127.0.0.1'
      }
    }
  };

}).call(this);
