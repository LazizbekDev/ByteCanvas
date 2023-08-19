import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Categories from '../features/Categories';
import Posts from '../features/Posts'
import { getPosts, reset } from '../redux/post/postSlice';

const Home = () => {
    const { isLoading, posts, isSuccess } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset())
            }
        }
    }, [dispatch, isSuccess])

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

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
            {!isLoading && <Posts posts={posts} />}
        </div>
    )
}

export default Home