declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: number;
    NODE_ENV: string;
    DB_LOCAL_URL: string;
  }
}
