import axios from "axios";

const getPosts = async () => {
    const base = '/api/posts/'
    const res = await axios.get(base);

    return res.data
}

const postServices = {
    getPosts
};

export default postServices;