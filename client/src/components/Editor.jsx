import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import MDEditor from '@uiw/react-md-editor';
import { createContent } from '../redux/post/postSlice';
import { reset } from '../redux/post/postSlice';

export default function Editor() {
    const [value, setValue] = useState(`**Hello world!!!**`);
    const [inputText, setInputText] = useState('');
    const [slugText, setSlugText] = useState('');
    const { message, isSuccess } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset())
            }
        }
    }, [dispatch, isSuccess])

    const handleInputChange = (event) => {
        const text = event.target.value;
        setInputText(text);
        setSlugText(slugify(text));
    };

    const slugify = (text) => {
        return text
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');
    };

    const sendData = async () => {
        const data = {
            title: inputText,
            slug: slugText,
            content: value,
            author: "Lazizbek Tojiboev"
        }

        console.log(data)
        dispatch(createContent(data));
    }
    return (
        <>
            <label className="block mb-4">
                <span className="block text-sm font-medium text-slate-700">Title of your blog post</span>
                <input
                    placeholder='start with your creative title'
                    value={inputText}
                    onChange={(e) => handleInputChange(e)}
                    className="input text-3xl w-full focus:ring rounded focus:outline-none focus:ring-black-400 border-b-2 placeholder:uppercase placeholder:text-sm"
                />
                {slugText && (
                    <p className='text-sm text-slate-500'><b className='text-slate-600'>Slug:</b> {slugText}</p>
                )}
            </label>
            <MDEditor
                value={value}
                onChange={setValue}
            />
            <button onClick={sendData} className='rounded-md bg-slate-300 float-right py-2 px-5 font-semibold uppercase mt-5'>Publish post</button>
        </>
    );
}