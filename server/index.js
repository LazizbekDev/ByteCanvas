import express from "express";
import { config } from "dotenv";
import colors from "colors";
import postRoutes from "./routes/posts.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
config()
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use('/api/posts', postRoutes)

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`${colors.green('➜')}  ${colors.bold('Local:')}    ${colors.cyan(`http://localhost:${PORT}/`)}`)
})