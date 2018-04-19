module.exports = {
  apps: [
    {
      name: 'draftboard demo',
      script: './server.js',
      watch: true,
      env: {
        PORT: 8080, //you can choose
        NODE_ENV: 'development',
      },
      env_production: {
        PORT: 3080, //you can choose
        NODE_ENV: 'production',
      },
    },
  ],
};
