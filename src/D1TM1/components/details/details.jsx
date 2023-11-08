import '../style/details.scss'
import backarraow from '../../images/backarraow.png'
import logo from '../../images/logo.png'
import vector from '../../images/Vector.png'
import logout from '../../images/logout.png'
import { useState } from 'react'
import Personal from '../personal/personal'
import Address from '../address/address'
import Academics from '../academics/academics'
function Details() {
    const [activeStep, setActiveStep] = useState(1);
    const handleNext = () => {
        setActiveStep((prev) => prev + 1);
    }
    return (
        <div className='details'>
            <div className='left'>
                <button class="button">
                    <img src={backarraow} alt="Image 1" />
                    <img src={logo} alt="Image 2" />
                </button>
                <button class="button logout">
                    <img src={logout} alt="Image 1" />
                </button>
            </div>
            <div className='right'>
                <p className='right-heading'>Having Trouble? <span>Need Help!</span></p>
                <h3>We would love to know more about you. Please share some basic details</h3>
                <div className="wrapper">
                    <ul>
                        <li className={activeStep === 1 ? 'active' : ''}>
                            <span>1</span> Personal Details <img src={vector} alt="right-shift" />
                        </li>
                        <li className={activeStep === 2 ? 'active' : ''}>
                            <span>2</span> Address Details <img src={vector} alt="right-shift" />
                        </li>
                        <li className={activeStep === 3 ? 'active' : ''}>
                            <span>3</span> Academic Details
                        </li>
                    </ul>
                    {activeStep==1 && <Personal activeStep={activeStep} handleNext={handleNext} />}
                    {activeStep==2 && <Address activeStep={activeStep} handleNext={handleNext} />}
                    {activeStep==3 && <Academics activeStep={activeStep} handleNext={handleNext} />}
                </div>
            </div>
        </div>
    )
}

export default Details;
