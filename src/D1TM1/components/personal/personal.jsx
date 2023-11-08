import React, { useState } from 'react';
import {useDispatch } from 'react-redux'
import DateInput from '../dateInput/dateInput';
import GenderSelector from '../genderSelector/genderSelector';
import PhoneNumberInput from '../mobileNumberInput/mobileNumberInput';
import TextInput from '../textInput/textInput';
import '../style/personal.scss';
import { addPersonalDetails } from '../../redux/personalDetails';

function Personal({activeStep,handleNext}) {
    const [personalDetails, setpersonalDetails] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        mobileNumber: '',
        parentMobileNumber: '',
    });
    const dispatch=useDispatch();

    const handleInputChange = (field, value) => {
        setpersonalDetails({ ...personalDetails, [field]: value });
    };

    return (
        <div className='personal'>
            <h4 className='heading'>Personal Details</h4>
            <h5 className='description'>Fill out the details</h5>
            <form>
                <div className='row'>
                    <TextInput
                        description={"First Name"}
                        onChange={(value) => handleInputChange('firstName', value)}
                    />
                    <TextInput
                        description={"Last Name"}
                        onChange={(value) => handleInputChange('lastName', value)}
                    />
                </div>
                <div className='row'>
                    <DateInput
                        description={"Date of Birth"}
                        onChange={(value) => handleInputChange('dateOfBirth', value)}
                    />
                    <GenderSelector
                        description={"Gender"}
                        onChange={(value) => handleInputChange('gender', value)}
                    />
                </div>
                <div className='row'>
                    <PhoneNumberInput
                        description={"Mobile Number"}
                        onChange={(value) => handleInputChange('mobileNumber', value)}
                    />
                    <PhoneNumberInput
                        description={"Parent Mobile Number"}
                        onChange={(value) => handleInputChange('parentMobileNumber', value)}
                    />
                </div>
                {activeStep < 3 && <button style={{marginTop:'20px'}} onClick={()=>{ dispatch(addPersonalDetails(personalDetails));handleNext()}}>Next ></button>}
            </form>
        </div>
    );
}

export default Personal;
