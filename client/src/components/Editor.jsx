import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

export default function Editor() {
    const [value, setValue] = useState(`**Hello world!!!**`);
    const [inputText, setInputText] = useState('');
    const [slugText, setSlugText] = useState('');

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

    const sendData = () => {
        const data = {
            title: inputText,
            slug: slugText,
            content: value
        }

        console.log(data)
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