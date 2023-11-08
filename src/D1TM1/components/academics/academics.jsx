import { useDispatch } from 'react-redux';
import '../style/academics.scss';
import TextInput from '../textInput/textInput';
import Subject from '../subject/subject';
import DropDown from '../dropDown/dropDown';
import React, { useState } from 'react';
import { addAcademicsDetails } from '../../redux/academicsDetails';

function Academics({ activeStep, handleNext }) {
    const classes = ['1', '2'];
    const boards = ['State', 'CBSE'];
    const dispatch = useDispatch();
    const [academicsDetails, setAcademicsDetails] = useState({
        school: '',
        class: '',
        board: '',
        subjects: [],
    });

    const handleInputChange = (field, value) => {
        setAcademicsDetails({ ...academicsDetails, [field]: value });
    };

    const handleSubjectChange = (subjects) => {
        setAcademicsDetails({ ...academicsDetails, subjects: subjects });
    };

    return (
        <div className="academics">
            <h4 className="heading">Academic Details</h4>
            <h5 className="description">Fill out the details</h5>
            <form>
                <div className="row">
                    <TextInput
                        description={'School'}
                        onChange={(value) => handleInputChange('school', value)}
                    />
                </div>
                <div className="row">
                    <DropDown
                        description={'Class'}
                        options={classes}
                        onChange={(value) => handleInputChange('class', value)}
                    />
                    <DropDown
                        description={'Board'}
                        options={boards}
                        onChange={(value) => handleInputChange('board', value)}
                    />
                </div>
                <div className="row">
                    <Subject
                        description={'Subjects You Study'}
                        onChange={handleSubjectChange}
                    />
                </div>
                {activeStep <= 3 && (
                    <button style={{ marginTop: '20px' }} onClick={()=>{ dispatch(addAcademicsDetails(academicsDetails));handleNext()}}>
                        Submit
                    </button>
                )}
            </form>
        </div>
    );
}

export default Academics;
