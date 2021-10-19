import React, { useRef, useState } from 'react'
import './VideoComponent.css'
import { tiktokVideo } from '../../assets'
import VideoFooter from '../VideoFooter/VideoFooter'
import VideoSidebar from '../VideoSidebar/VideoSidebar'

const VideoComponent = () => {
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
            src={tiktokVideo}
         />
         <VideoFooter />
         <VideoSidebar />
      </div>
   )
}

export default VideoComponent
