import axios from "axios";

const base = '/api/posts'
const getPosts = async () => {
    const res = await axios.get(base);

    return res.data
}

const getContent = async (slug) => {
    const res = await axios.get(`${base}/${slug}`);

    return res.data
}

const postServices = {
    getPosts,
    getContent
};

export default postServices;