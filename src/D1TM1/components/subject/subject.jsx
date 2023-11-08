import React, { useState } from 'react';
import '../style/subject.scss';

function Subject({ description, required = false, onChange }) {
  const subjects = ["English", "Hindi", "Biology", "Chemistry", "Political science", "Computer science", "Accountancy", "Geography", "Economics", "Mathematics", "Physical Education", "Social science", "Economics", "Business", "Physics"];
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const handleSubjectSelect = (e, subject) => {
    e.preventDefault();
    if (selectedSubjects.includes(subject)) {
        setSelectedSubjects(selectedSubjects.filter((item) => item !== subject));
    } else {
        setSelectedSubjects([...selectedSubjects, subject]);
    }
    if (onChange) {
        onChange([...selectedSubjects,subject]);
    }
  };

  return (
    <div className="suject">
      {description && (
        <p id="description">
          {description}
          {required && <span style={{ color: "red" }}>*</span>}
        </p>
      )}
      <br />
      <div className="options">
        {subjects.map((subject, index) => (
          <button
            onClick={(e) => handleSubjectSelect(e, subject)}
            key={index}
            className={selectedSubjects.includes(subject) ? "selected" : ""}
          >
            {subject}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Subject;
