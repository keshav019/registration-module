import React from 'react';
import '../style/dateSelect.scss';

function DateInput({ description, required = false, onChange }) {
    const handleDateChange = (e) => {
        e.preventDefault();
        onChange(e.target.value);
    };

    return (
        <div className="date-select">
            {description && (
                <p>
                    {description}
                    {required && <span style={{ color: 'red' }}>*</span>}
                </p>
            )}
            <div className="date-container">
                <input type="date" required={required} placeholder="DD-MM-YYYY" onChange={handleDateChange} />
            </div>
        </div>
    );
}

export default DateInput;