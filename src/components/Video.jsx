import React from 'react'
import '../styles/Video.scss'
import video from '../assets/videos/video.webm'

export default function Video() {
  return (
    <div className='video'>
        <video className='video__video' preload='auto' loop autoPlay muted disablePictureInPicture>
            <source src={video} type="video/webm"/>
            Przeglądarka nie obsługuje tego formatu video
        </video>
    </div>
  )
}
