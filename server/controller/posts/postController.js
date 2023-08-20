import path from 'path';
import fs from "fs"

const data = [
    {
        id: 1,
        title: 'Exploring the Depths of 3D Modeling',
        excerpt: 'Learn how to create stunning 3D models using Blender.',
        slug: 'exploring-3d-modeling',
    },
    {
        id: 2,
        title: 'Mastering Web Accessibility: A Comprehensive Guide',
        excerpt: 'Learn how to create inclusive web experiences that cater to all users.',
        slug: 'mastering-web-accessibility',
      },
      {
        id: 3,
        title: 'The Art of Code Refactoring: Strategies and Best Practices',
        excerpt: 'Discover techniques to improve code quality and maintainability through refactoring.',
        slug: 'art-of-code-refactoring',
      },
    // Add more featured posts
];

export const featuredPosts = (req, res) => {
    return res.json(data)
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