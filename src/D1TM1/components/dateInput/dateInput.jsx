import React from 'react';
import '../style/dateSelect.scss';

function DateInput({ description, required = false }) {
    return (
        <div className="date-select">
            {description && (
                <p>
                    {description}
                    {required && <span style={{ color: 'red' }}>*</span>}
                </p>
            )}
            <div className="date-container">
                <input
                    type="date"
                    required={required}
                    placeholder="DD-MM-YYYY"
                />
            </div>
        </div>
    );
}

export default DateInput;
