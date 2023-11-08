import React, { useState } from 'react';
import '../style/subject.scss';

function Subject({ handleSelect }) {
    const subjects = ["English", "Hindi", "Biology", "Chemistry", "Political science", "Computer science", "Accountancy", "Geography", "Economics", "Mathematics", "Physical Education", "Social science", "Economics", "Business", "Physics"];
    const [selectedSubjects, setSelectedSubjects] = useState([]);

    const handleSubjectSelect = (e, subject) => {
        e.preventDefault();
        if (selectedSubjects.includes(subject)) {
            setSelectedSubjects(selectedSubjects.filter(item => item !== subject));
        } else {
            setSelectedSubjects([...selectedSubjects, subject]);
        }
        handleSelect(subject);
    };

    return (
        <div className='subject'>
            {subjects.map((subject, index) => (
                <button
                    onClick={(e) => handleSubjectSelect(e, subject)}
                    key={index}
                    className={selectedSubjects.includes(subject) ? "selected" : ''}
                >
                    {subject}
                </button>
            ))}
        </div>
    );
}

export default Subject;
