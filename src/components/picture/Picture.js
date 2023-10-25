import React from 'react'
import { StyledPicture } from './picture.style'

function Picture(props) {
    return (
        <StyledPicture {...props} src={props.src} alt={props.alt} />
    )
}

export default Picture