type EnvInterface = {
  ENVIRONMENT: string;

  BE_HOST: string;
  BE_PORT: number;

  // database
  MONGO_DB_HOST: string;
  MONGO_DB_PORT: number;
  MONGO_DB_NAME: string;

  // auth
  ACCESS_TOKEN_SECRET: string;
  REFRESH_TOKEN_SECRET: string;
};
