import express from "express";
import { config } from "dotenv";
import colors from "colors";
import postRoutes from "./routes/posts.js";
config()
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Hey")
})

app.use('/api/posts', postRoutes)

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`${colors.green('➜')}  ${colors.bold('Local:')}    ${colors.cyan(`http://localhost:${PORT}/`)}`)
})