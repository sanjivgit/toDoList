import React from 'react'
import { InputField } from './input.style'

function Input(props) {
    return (
        <InputField {...props} placeholder={props.placeholder} />
    )
}

export default Input