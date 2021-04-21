import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import "./TweetBox.css";
import db from './firebase';


function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Aniket',
            username: "avicoder",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
        });
        setTweetMessage("");
        setTweetImage("");
        
    };

    
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" />
                    <input onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage} placeholder="What's happening?" type="text"/>
                </div>
                <input

                    onChange={(e) => setTweetImage(e.target.value)}
                    value={tweetImage}

                    placeholder="insert image's url" type="text" className="tweetBox_imageInput" />

                <Button onClick={sendTweet} type="submit" className="tweetBox_button">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
