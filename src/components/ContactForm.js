import React, {useState} from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const FormStyle = styled.form`
width: 100%;
.form-group{
    width: 100%;
    margin-bottom: 2rem;
}
label{
    font-size: 1.8rem;
}
input, textarea{
    width:100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: white;
    background-color:#411530;
    outline: none;
    border:none;
    border-radius: 8px;
    margin-top:1rem;
}
textarea{
    min-height: 250px;
    resize: vertical;
}

button[type="submit"]{
    background-color:#411530;
    color: white;
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border:none;
    border-radius: 8px;
    padding: 1rem 4rem;
    cursor: pointer;
}
`;

export default function ContactForm() {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[message, setMessage] = useState('');

    const  sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_3nssd2v', 'template_a8jutc8', e.target, '1WUV0kPlIHmPyIYoe')
        
        setName('');
        setEmail('');
        setMessage('');
    }


  return (
    <div>
        <FormStyle onSubmit={sendEmail} id='my_form'>
            <div className="form-group">
                <label htmlFor="name">
                    Your Name
                    <input type="text" id='name' name='name' value={name} onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="email">
                    Your Email
                    <input type="text" id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="message">
                    Your Message
                    <textarea type="text" id='message' name='message' value={message} onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
            </div>
            <button type='submit'>Send</button>
        </FormStyle>
    </div>
  )
}
