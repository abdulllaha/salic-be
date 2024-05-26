import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
app.use('/public', express.static(path.join(__dirname, '../public')));
