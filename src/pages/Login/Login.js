import React from 'react'
import { LoginContainer, LoginMainContainer } from './login.style'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import InputContainer from '../../components/InputContainer/InputContainer'
import Paragraph from '../../components/paragraph/Paragraph'

function Login(props) {
    return (
        <LoginMainContainer>
            <LoginContainer {...props} className='flex flex-col items-center' >
                <Paragraph text="Login" fontSize={45} />
                <InputContainer label="Email/Mobile" placeholder="john@gmail.com" />
                <div className="mt-3 mb-2">
                    <InputContainer label="Password" placeholder="123456" />
                </div>
                <Button color="#FFF" className="mt-3 mb-3" text='Login' />
                <Paragraph text="Not a member? SignUp" fontSize={16} />
            </LoginContainer>
        </LoginMainContainer>
    )
}

export default Login