import express from "express";
import { config } from "dotenv";
import colors from "colors";
config()
const app = express();

app.get('/', (req, res) => {
    res.send("Hey")
})

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`${colors.green('➜')}  ${colors.bold('Local:')}    ${colors.blue(`http://localhost:${PORT}/`)}`)
})