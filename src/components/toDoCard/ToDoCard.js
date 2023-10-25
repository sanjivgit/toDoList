import React from 'react'
import { ToDoCardContainer } from './toDoCard.style'
import Paragraph from '../paragraph/Paragraph'

function ToDoCard(props) {
    return (
        <ToDoCardContainer {...props} className='flex flex-col justify-center p-8' >
            <Paragraph text={props.title} fontSize={27} />
            <Paragraph text={props.time} fontSize={16} color="#B9B9B9" />
        </ToDoCardContainer>
    )
}

export default ToDoCard