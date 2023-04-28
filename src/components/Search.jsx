import React from 'react'
import girl from '../img/girl.jpg'

const Search = () => {
    return (
        <div className='search'>
            <div className="searchForm">
                <input type="text" placeholder='Find a user' />
            </div>
            <div className="userChat">
                <img src={girl} alt="" />
                <div className="userChatInfo">
                    <span>AKW</span>
                </div>
            </div>
        </div>
    )
}

export default Search
