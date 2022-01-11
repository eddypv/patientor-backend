import express  from "express";
import cors from 'cors';
import diagnoseRouter from './src/routers/DiagnoseRouter';

const app = express();
app.use(express.json());
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
const PORT = 3001;
app.get('/api/ping', (_req, res)=>{
    return res.send("pong");
});
app.use('/api/diagnose', diagnoseRouter);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});
