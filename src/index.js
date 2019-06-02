import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();
const ENV_PORT = process.env.ENV_PORT;

app.use(cors());

app.listen({ port: ENV_PORT }, () => {
    console.log(`Server listening on http://localhost:${ENV_PORT}`);
});