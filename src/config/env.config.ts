// eslint-disable-next-line @typescript-eslint/no-var-requires
const { port, version, description, name } = require('../../package.json');
export default () => ({
  ENVIRONMENT: process.env.NODE_ENV || 'dev',
  MONGO_DATABASE: process.env.MONGO_DATABASE,
  PORT: port || +process.env.PORT || 3000,
  POSTGRES_HOST: process.env.POSTGRES_HOST || 'localhost',
  POSTGRES_PORT: process.env.POSTGRES_PORT || 5432,
  POSTGRES_USER: process.env.POSTGRES_USER || 'postgres',
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'root',
  POSTGRES_DB: process.env.POSTGRES_DB || 'postgres',
  VERSION: version,
  DESCRIPTION: description,
  NAME: name,
});
