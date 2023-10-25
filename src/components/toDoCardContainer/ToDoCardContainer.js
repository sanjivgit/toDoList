import React from 'react'
import { ToDoCardListContainer } from './toDoCardContainer.style'
import ToDoCard from '../toDoCard/ToDoCard'
import Picture from '../picture/Picture'

function ToDoCardContainer(props) {
    return (
        <ToDoCardListContainer {...props}  >
            <div className='flex items-center mb-8'>
                <ToDoCard
                    title=" Urna, tempor aliquet maecenas aliquam risus maecenas ut morbi."
                    time="Mon, 21 Dec 2020 14:57 GMT"
                />
                <Picture className="mx-4" src="/images/cancel.png" height={49} width={49} alt="cancle-icon" />
                <Picture src="/images/edit.png" height={24} width={24} alt="cancle-icon" />
            </div>
            <div className='flex items-center mb-8'>
                <ToDoCard
                    title=" Urna, tempor aliquet maecenas aliquam risus maecenas ut morbi."
                    time="Mon, 21 Dec 2020 14:57 GMT"
                />
                <Picture className="mx-4" src="/images/cancel.png" height={49} width={49} alt="cancle-icon" />
                <Picture src="/images/edit.png" height={24} width={24} alt="cancle-icon" />
            </div>
            <div className='flex items-center mb-8'>
                <ToDoCard
                    title=" Urna, tempor aliquet maecenas aliquam risus maecenas ut morbi."
                    time="Mon, 21 Dec 2020 14:57 GMT"
                />
                <Picture className="mx-4" src="/images/cancel.png" height={49} width={49} alt="cancle-icon" />
                <Picture src="/images/edit.png" height={24} width={24} alt="cancle-icon" />
            </div>
        </ToDoCardListContainer>
    )
}

export default ToDoCardContainer