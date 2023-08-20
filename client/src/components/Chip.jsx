import React, { useState } from 'react';

const ChipsInput = ({ tags, tagChanges }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter' && inputValue.trim() !== '') {
          const newTags = [...tags, inputValue.trim()];
          tagChanges(newTags); // Update parent component's state
          setInputValue('');
        }
      };
    

    const handleRemoveTag = (tagIndex) => {
        const newTags = tags.filter((_, index) => index !== tagIndex);
        tagChanges(newTags); // Update parent component's state
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter a tag"
                value={inputValue}
                required
                className="text-sm rounded focus:outline-none border-b-2 my-5 placeholder:uppercase"
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
            />
            <div>
                {tags.map((tag, index) => (
                    <button className="rounded-md bg-yellow-500 py-1 px-2 font-semibold text-sm uppercase mb-3 mr-3" key={index}>
                        <span className="chip-label">{tag}</span>
                        <span
                            className="chip-delete"
                            onClick={() => handleRemoveTag(index)}
                        >
                            &#x2715;
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ChipsInput;
