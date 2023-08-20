import mongoose from "mongoose";
import colors from "colors";

const connect = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`${colors.gray('➜')}  ${colors.bold.gray('DB:   ')}    ${colors.underline.gray(connect.connection.host)}`)
    } catch (err) {
        console.log(`${colors.gray('➜')}  ${colors.red('ERR:')}    ${err.message}`.red.underline.bold)
    }
}

export default connect;