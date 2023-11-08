import React from 'react';
import '../style/dropDown.scss';

function DropDown({ description, options, required = false, onChange }) {
    const handleDropDownChange = (e) => {
        e.preventDefault();
        onChange(e.target.value);
    };

    return (
        <div className="dropDown">
            {description && (
                <p id="description">
                    {description}
                    {required && <span style={{ color: 'red' }}>*</span>}
                </p>
            )}
            <br />
            <select className="select" onChange={handleDropDownChange}>
                <option value="">Select {description}</option>
                {options &&
                    options.map((option, index) => (
                        <option value={option} key={index}>
                            {option}
                        </option>
                    ))}
            </select>
        </div>
    );
}

export default DropDown;
