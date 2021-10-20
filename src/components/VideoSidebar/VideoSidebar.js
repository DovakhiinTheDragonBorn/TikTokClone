import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MessageIcon from '@mui/icons-material/Message'
import ShareIcon from '@mui/icons-material/Share'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const VideoSidebar = ({ likeCount, shareCount, messageCount }) => {
   const [liked, setLiked] = useState(false)
   return (
      <div className="videoSidebar">
         <div className="videoSidebar__button">
            {liked ? (
               <FavoriteIcon
                  onClick={() => {
                     setLiked(false)
                  }}
                  fontSize="large"
                  className="videoSidebar__button__icon"
               />
            ) : (
               <FavoriteBorderIcon
                  onClick={() => {
                     setLiked(true)
                  }}
                  fontSize="large"
                  className="videoSidebar__button__icon"
               />
            )}
            <p>{liked ? likeCount + 1 : likeCount}</p>
         </div>
         <div className="videoSidebar__button">
            <MessageIcon
               fontSize="large"
               className="videoSidebar__button__icon"
            />

            <p>{messageCount}</p>
         </div>
         <div className="videoSidebar__button">
            <ShareIcon
               fontSize="large"
               className="videoSidebar__button__icon"
            />
            <p>{shareCount}</p>
         </div>
      </div>
   )
}

export default VideoSidebar
