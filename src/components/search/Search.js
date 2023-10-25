import React from 'react'
import { SearchContainer } from './search.style'
import Picture from '../picture/Picture'
import Input from '../input/Input'
import Paragraph from '../paragraph/Paragraph'

function Search(props) {
    return (
        <SearchContainer {...props} className='flex items-center px-3' >
            <Picture src="/images/search.png" alt="search-icon" width={29} height={29} />
            <Paragraph className="px-2 mb-1" text="|" fontSize={32} />
            <Input backgroundColor="#384F6B" outline={false} height={52} width={600} type="text" placeholder="Search" />
        </SearchContainer>
    )
}

export default Search