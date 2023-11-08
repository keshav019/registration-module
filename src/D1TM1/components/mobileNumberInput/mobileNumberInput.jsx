import React from 'react';
import '../style/phoneNumberInput.scss';

function PhoneNumberInput({ placeholder, description, required = false }) {
    return (
        <div className="phone-input">
            {description && (
                <p>
                    {description}
                    {required && <span style={{ color: 'red' }}>*</span>}
                </p>
            )}
            <div className="phone-container">
                <span>+91</span>
                <input
                    type="number"
                    required={required}
                    placeholder="98765-43210"
                />
            </div>
        </div>
    );
}

export default PhoneNumberInput;
