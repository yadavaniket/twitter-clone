import React, { forwardRef } from 'react'
import "./Post.css"

import { Avatar } from "@material-ui/core"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';


const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
},ref)=> {
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post_body">
                <div className='post_header'>
                    <div className="post_headerText">
                        <h3>{displayName}{" "}
                            <span className="post_headerSpecial">
                                {verified ? <VerifiedUserIcon className="post_badge" /> : "not verified"} {username}
                            </span>
                        </h3>
                    </div>

                    <div className="post_headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt=""></img>
                <div className="post_footer">
                    <ChatBubbleOutlineOutlinedIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
})

export default Post
