const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '104.193.142.178'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'dbpadm_strapi'),
      user: env('DATABASE_USERNAME', 'dbpadm_strapi_user'),
      password: env('DATABASE_PASSWORD', 'Aa19184113.'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

