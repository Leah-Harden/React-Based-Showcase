

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
        setEmailValid(emailRegex.test(email));
    }

    return (

        <form className="formResume crimson" onSubmit={handleSubmit}>
            <div>
                <input type="text" name="firstName" value={formData.fname} id='firstName' className="inset" onChange={handleChange} />



                <input type="text" name="LastName" value={formData.lname} className="inset" onChange={handleChange} />
            </div>
            <div className="col center">
                <input type="email" name="Email" className="inset emailForm" onChange={handleChange} value={formData.email} />

                {!emailValid && <p>Please enter a valid email</p>}


                <textarea className="inset FormTextarea" rows='10' cols={50} value={formData.message}></textarea>
                {/* <p>please fill in the following field(s)</p> */}
                <button type="submit" className="FormBtn">Submit</button>
            </div>
        </form >);

}


export default SubmitForm