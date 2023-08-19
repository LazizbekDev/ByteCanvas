const data = [
    {
        id: 1,
        title: 'Exploring the Depths of 3D Modeling',
        excerpt: 'Learn how to create stunning 3D models using Blender.',
        slug: 'exploring-3d-modeling',
    },
    {
        id: 2,
        title: 'Exploring the Depths of 3D Modeling',
        excerpt: 'Learn how to create stunning 3D models using Blender.',
        slug: 'exploring-3d-modeling',
    },
    {
        id: 3,
        title: 'Exploring the Depths of 3D Modeling',
        excerpt: 'Learn how to create stunning 3D models using Blender.',
        slug: 'exploring-3d-modeling',
    }
    // Add more featured posts
];

export const featuredPosts = (req, res) => {
    return res.json(data)
}