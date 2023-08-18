import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Map through your featured posts and create post cards */}
            {posts.map((post) => (
                <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-600">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="text-blue-500 mt-2 inline-block">
                        Read More
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Posts;