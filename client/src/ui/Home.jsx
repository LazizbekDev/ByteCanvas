import Categories from '../features/Categories';
import Posts from '../features/Posts'

const Home = () => {
    const featuredPosts = [
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

    const categories = [
        {
            id: 1,
            name: 'Programming',
            slug: 'programming',
        },
        {
            id: 2,
            name: '3D Modeling',
            slug: '3d-modeling',
        },
        // Add more categories
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold mb-4">Welcome to ByteCanvas Stories</h1>
            <p className="text-lg">
                Explore a world of technology, programming, 3D modeling, and more. Dive into our
                collection of articles and tutorials to enhance your skills and knowledge.
            </p>
            {/* You can add featured posts or categories here */}

            <h2 className="text-2xl font-semibold mt-8">Categories</h2>
            <Categories categories={categories} />

            {/* Display the FeaturedPosts component */}
            <h2 className="text-2xl font-semibold mt-8">Featured Posts</h2>
            <Posts posts={featuredPosts} />
        </div>
    )
}

export default Home