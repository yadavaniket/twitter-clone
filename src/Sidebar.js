import React from "react"
import './Sidebar.css'

import SidebarOptions from './SidebarOptions'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from "@material-ui/core";
function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter Icon */}
            <TwitterIcon className="sidebar_twitter_icon"/>

            {/* Twitter Icon */}
            {/* SidebarOption */}
            <SidebarOptions active Icon={HomeIcon} text="Home" />
            <SidebarOptions Icon={ExploreIcon} text="Explorer" />
            <SidebarOptions text="Notification" Icon={NotificationsNoneIcon} />
            <SidebarOptions Icon={MailOutlineSharpIcon} text="Messages" />
            <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOptions text="Lists" Icon={ListAltIcon} />
            <SidebarOptions Icon={PersonOutlineIcon} text="Profile" />
            <SidebarOptions Icon={MoreHorizIcon} text="More" />
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* Button */}
            <Button variant="outlined" className="sidebar_tweet_btn" fullWidth >
                Tweet
            </Button>
        </div>
    )
}

export default Sidebar;