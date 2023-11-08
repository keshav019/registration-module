import { useDispatch } from 'react-redux';
import DropDown from '../dropDown/dropDown';
import '../style/address.scss';
import TextInput from '../textInput/textInput';
import React, { useState } from 'react';
import { addAddressDetails } from '../../redux/addressDetails';

function Address({ activeStep, handleNext }) {
    const states = ['Bihar', 'Tripura'];
    const dispatch = useDispatch();
    const [addrssDetails, setAddrssDetails] = useState({
        house: '',
        city: '',
        state: '',
        pinCode: '',
        referralCode: '',
    });

    const handleInputChange = (field, value) => {
        setAddrssDetails({ ...addrssDetails, [field]: value });
    };

    return (
        <div className="address">
            <h4 className="heading">Address Details</h4>
            <h5 className="description">Fill out the details</h5>
            <form>
                <div className="row">
                    <TextInput
                        description={'House No. and Street /Colony Name'}
                        onChange={(value) => handleInputChange('house', value)}
                    />
                </div>
                <div className="row">
                    <TextInput
                        description={'City'}
                        onChange={(value) => handleInputChange('city', value)}
                    />
                    <DropDown
                        description={'State'}
                        options={states}
                        onChange={(value) => handleInputChange('state', value)}
                    />
                </div>
                <div className="row">
                    <TextInput
                        description={'Pin Code'}
                        onChange={(value) => handleInputChange('pinCode', value)}
                    />
                    <TextInput
                        description={'Referral Code'}
                        onChange={(value) => handleInputChange('referralCode', value)}
                    />
                </div>
                {activeStep < 3 && (
                    <button style={{ marginTop: '20px' }} onClick={()=>{ dispatch(addAddressDetails(addrssDetails));handleNext()}}>
                        Next &gt;
                    </button>
                )}
            </form>
        </div>
    );
}

export default Address;
