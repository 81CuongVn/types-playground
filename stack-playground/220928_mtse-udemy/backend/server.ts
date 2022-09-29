import * as dotenv      from 'dotenv';
import app              from './app';
import connectDatabase  from './config/database';

dotenv.config({ path: 'backend/config/config.env' });

const port: number  = process.env.PORT!;
const mode: string  = process.env.NODE_ENV!;
const uri: string   = process.env.DB_LOCAL_URL!;

connectDatabase(uri);

app.listen(port, () => {
  console.log(`Server started on: http://localhost:${port} in ${mode} mode.`);
})

export {};