module.exports = ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('PUBLIC_URL',),
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
