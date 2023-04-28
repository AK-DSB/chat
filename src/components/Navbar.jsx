import React from 'react'
import avatar from '../img/avatar.jpg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className="logo">Lama chat</span>
            <div className="user">
                <img src={avatar} alt="" />
                <span>AKW</span>
                <button>logout</button>
            </div>
        </div>
    )
}

export default Navbar
