import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets_widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1379078415832260610"} />
                <TwitterTimelineEmbed sourceType="profile"
                    screenName='AniketY04520302'
                    options={{ height: 400 }} />
                <TwitterShareButton url="https://www.facebook.com/Avengers2FanPage/" options={{ text: "#react js is awesome", via: "aniket" }} />
            </div>
        </div>
    )
}

export default Widgets
