import React from 'react';
import '../style/textInput.scss';

function TextInput({ placeholder, description, required = false }) {
    return (
        <div className="text-input">
            {description && (
                <p>
                    {description}
                    {required && <span style={{ color: 'red' }}>*</span>}
                </p>
            )}
            <input type="text" required={required} placeholder={placeholder} />
        </div>
    );
}

export default TextInput;
