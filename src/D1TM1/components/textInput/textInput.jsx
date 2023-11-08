import React from 'react';
import '../style/textInput.scss';

function TextInput({ description, required = false, onChange }) {
    const handleTextChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div className="text-input">
            {description && (
                <p id="description">
                    {description}
                    {required && <span style={{ color: 'red' }}>*</span>}
                </p>
            )}
            <div className="input-container">
                <input type="text" required={required} onChange={handleTextChange} />
            </div>
        </div>
    );
}

export default TextInput;