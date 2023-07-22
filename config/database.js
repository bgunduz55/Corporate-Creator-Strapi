module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'corporate-creator-strapi_corporate_admin'),
        username: env('DATABASE_USERNAME', 'admin1'),
        password: env('DATABASE_PASSWORD', '1qaz2WSX!!'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
