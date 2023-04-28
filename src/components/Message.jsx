import React from 'react'
import girl from '../img/girl.jpg'
import avatar from '../img/avatar.jpg'

const Message = () => {
    return (
        <div className='message owner'>
            <div className="messageInfo">
                <img src={girl} alt="" />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                <img src={avatar} alt="" />
            </div>
        </div>
    )
}

export default Message
