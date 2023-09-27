import React from 'react';
import SectionTitle from './SectionTitle.js';
import ContactInfoItem from './ContactInfoItem.js';
import {MdLocalPhone, MdEmail} from 'react-icons/md';
import {AiFillLinkedin} from 'react-icons/ai';
import ContactForm from './ContactForm.js';
import styled from 'styled-components';


const ContactStyle = styled.div`
    padding: 10rem 0;
    max-width: 95%;
    margin:auto;
    .contactSection_wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection_wrapper::after {
    position: absolute;
    margin-top:60px;
    content: '';
    width: 2px;
    height: 90%;
    background-color: #411530;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
  }
  @media only screen and (max-width: 900px) {
    .contactSection_wrapper {
      flex-direction: column;
    }
    .contactSection_wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

function gotoLink(e){

}

const Contact = () => {
  return (
    <ContactStyle id='contactSection'>
        <div className="container">
            <SectionTitle heading='Contact' subheading='Get in touch' />
            <div className="contactSection_wrapper">
                <div className="left">
                    <ContactInfoItem 
                        icon={<MdLocalPhone />} text='+917525860570'
                    />
                    <ContactInfoItem 
                        icon={<MdEmail />} text='dishankkumaryadav@gmail.com'
                    />
                    <ContactInfoItem 
                        text='Ghaziabad, Uttar Pradesh'
                    />
                    <a href="https://www.linkedin.com/in/dishank-kumar-yadav-054459204" target='_blank'>
                    <ContactInfoItem 
                        icon={<AiFillLinkedin/>} text='Dishank Kumar Yadav'
                    />
                    </a>
                </div>
                <div className="right">
                    <ContactForm/>
                </div>
            </div>
        </div>
    </ContactStyle>
  )
}

export default Contact;