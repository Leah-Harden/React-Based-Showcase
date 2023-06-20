

import React, { useState } from 'react';

const SubmitForm = () => {
    //is the event listen that start everything 
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        message: ''
    });

    const [emailValid, setEmailValid] = useState(true);

    //allow the var above to change and have there value set to the inputs
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // const fields = ''
    const handleSubmit = (e) => {
        e.preventDefault();
        validateEmail(formData.email)
        // Do something with the form data, such as submitting to a server
        console.log(formData);
        // Reset the form after submission
        setFormData({
            fname: '',
            lname: '',
            email: '',
            message: ''
        });
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailValid(emailRegex.test(email))
    }

    return (

        <form className="formResume crimson" onSubmit={handleSubmit}>
            <div className="col ">
                <div className='nameForm'>

                    <input type="text" name="fname" id='firstName' className="inset" placeholder='First Name' onChange={handleChange} />
                    <input type="text" name="lname" className="inset" placeholder='Last Name' onChange={handleChange} />
                </div>

                <input type="email" name="email" className="inset emailForm"
                    placeholder='Email' onChange={handleChange} />




                <textarea className="inset FormTextarea" rows='10' cols={50} name='message' placeholder='What do you want to talk about?' onChange={handleChange} />
                <button type="submit" className="FormBtn nameForm">Submit</button>
            </div>
        </form >);

}


export default SubmitForm