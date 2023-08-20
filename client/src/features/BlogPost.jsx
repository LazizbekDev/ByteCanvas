import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { reset, postContent } from '../redux/post/postSlice';

const BlogPost = () => {
  const { slug } = useParams();
  const { isLoading, markdown, isSuccess } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess])

  useEffect(() => {
    dispatch(postContent(slug))
  }, [dispatch])

  // const post = posts.find((post) => post.slug === slug);

  // if (!post) {
  // return <div>Post not found.</div>;
  // }

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-3xl font-semibold mb-4">{post.title}</h1> */}
      <ReactMarkdown className="prose">{markdown}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;