import path from 'path';
import fs from "fs";
import Post from "../model/BlogPost.js";

export const featuredPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        return res.json(posts)
    } catch (err) {
        console.log(err);
        return res.json(err)
    }
}

export const getContent = async (req, res) => {
    try {
        const filePath = path.join(path.resolve('./'), 'posts', `${req.params.slug}.md`);
        const content = fs.readFileSync(filePath, 'utf-8');
        return res.json(content)
    } catch (err) {
        return res?.send("something went to wrong")
    }
}

export const createPost = async (req, res) => {
    const { title, slug, content, author, tags } = req.body;

    try {
        const filePath = path.join(path.resolve('./'), 'posts', `${slug}.md`);
        fs.writeFileSync(filePath, content);

        const post = await Post.create({
            title,
            slug,
            author,
            tags
        })
        return res.status(201).json(post);
    } catch (err) {
        console.log(err)
        return res.json(err);
    }
}