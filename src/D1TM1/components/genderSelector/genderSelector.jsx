import React, { useState } from 'react';
import '../style/genderSelector.scss';

function GenderSelector({ description, required = false, onChange }) {
    const genders = ['Male', 'Female', 'Other'];
    const [selectedGender, setSelectedGender] = useState('');

    const handleGenderSelect = (e,gender) => {
        e.preventDefault();
        if (selectedGender === gender) {
            setSelectedGender('');
            onChange('');
        } else {
            setSelectedGender(gender);
            onChange(gender);
        }
    };

    return (
        <div className="gender">
            {description && (
                <p id="description">
                    {description}
                    {required && <span style={{ color: 'red' }}>*</span>}
                </p>
            )}
            <br />
            <div className="options">
                {genders.map((gender, index) => (
                    <button
                        onClick={(e) => handleGenderSelect(e,gender)}
                        key={index}
                        className={selectedGender == gender ? 'selected' : ''}
                    >
                        {gender}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default GenderSelector;
