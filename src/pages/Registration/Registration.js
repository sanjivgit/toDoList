import React from 'react'
import { RegisterContainer, RegisterMainContainer } from './registration.style'
import Paragraph from '../../components/paragraph/Paragraph'
import InputContainer from '../../components/InputContainer/InputContainer'
import Button from '../../components/button/Button'

function Registration(props) {
    return (
        <RegisterMainContainer>
            <RegisterContainer {...props} className='flex flex-col items-center' >
                <Paragraph text="Login" fontSize={45} />
                <InputContainer label="Full Name" placeholder="john@gmail.com" />
                <div className="mt-3">
                    <InputContainer label="Father Name" placeholder="Hari Prashad" />
                </div>
                <div className="mt-3">
                    <InputContainer label="Eamil" placeholder="john@gmail.com" />
                </div>
                <div className="mt-3">
                    <InputContainer label="Phone Number" placeholder="123456" />
                </div>
                <div className="mt-3">
                    <InputContainer label="Password" placeholder="123456" />
                </div>
                <Button color="#FFF" className="mt-3 mb-3" text='Sign Up' />
                <Paragraph text="Already a member? Login" fontSize={16} />
            </RegisterContainer>
        </RegisterMainContainer>
    )
}

export default Registration