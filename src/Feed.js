import React, { useState, useEffect } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'
import FlipMove from 'react-flip-move'
function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (setPosts(snapshot.docs.map(doc => doc.data()))))
    }, []);

    return (
        <div className='feed'>
            {/*Header*/}
            <div className="feed_header">
                <h2>Home</h2>
            </div>



            {/*TweetBox*/}

            <TweetBox />

            {/*Post*/}
            <FlipMove>
                {posts.map(post => (
                    <Post displayName={post.displayName}
                    key={post.text}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        image={post.image}
                        avatar={post.avatar} />
                ))}

            </FlipMove>



        </div>
    )
}

export default Feed
