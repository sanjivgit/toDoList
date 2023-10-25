import React from 'react'
import { HomeContainer } from './home.style'
import Header from '../../components/header/Header'
import Search from '../../components/search/Search'
import ToDoCard from '../../components/toDoCard/ToDoCard'
import ToDoCardContainer from '../../components/toDoCardContainer/ToDoCardContainer'
import BottomNavigation from '../../components/bottomNavigation/BottomNavigation'
import AddToDoList from '../../components/addToDoList/AddToDoList'

function Home(props) {
    return (
        <HomeContainer {...props} className='flex flex-col items-center' >
            <div className='flex flex-col items-center mb-24' >
                <Header />
                <Search />
            </div>
            <ToDoCardContainer className="ml-24" />
            <div className="my-12">
                <BottomNavigation />
            </div>
            <div className="mb-12">
                <AddToDoList placeholder="Add new list" />
            </div>
        </HomeContainer>
    )
}

export default Home