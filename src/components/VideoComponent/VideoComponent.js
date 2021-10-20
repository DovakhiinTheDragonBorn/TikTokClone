import React, { useRef, useState } from 'react'
import './VideoComponent.css'
import VideoFooter from '../VideoFooter/VideoFooter'
import VideoSidebar from '../VideoSidebar/VideoSidebar'

const VideoComponent = ({
   video,
   song,
   channel,
   description,
   likeCount,
   shareCount,
   messageCount,
}) => {
   const videoRef = useRef(null)

   const handleVideoPress = () => {
      if (videoRef.current.paused) videoRef.current.play()
      else videoRef.current.pause()
   }

   return (
      <div className="video">
         <video
            className="video__player"
            onClick={handleVideoPress}
            ref={videoRef}
            loop
            muted
            src={video}
         />
         <VideoFooter song={song} channel={channel} description={description} />
         <VideoSidebar
            likeCount={likeCount}
            shareCount={shareCount}
            messageCount={messageCount}
         />
      </div>
   )
}

export default VideoComponent
