module.exports = ({ env }) => ({
  host: env('HOST', 'https://strapi.redenetimoveis.com'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
