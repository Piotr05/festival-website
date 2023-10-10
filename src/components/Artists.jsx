import React from 'react'
import '../styles/Artists.scss'

export default function Artists({image, name, type, stage, time}) {
  return (
    <div className='artists'>
        <div className='artists-content-wrapper'>
          <img className='artists__image' src={image} alt='photo of artist'/>
          <div className="artists__description">
              <div className="artists__name-type-wrapper">
                  <span className="artists__description_name">{name}</span>
                  <span className="artists__description_type">{type}</span>
              </div>
              <div className="artists__stage-time-wrapper">
                  <span className="artists__description_stage">{stage}</span>
                  <span className="artists__description_time">{time}</span>
              </div>
          </div>
        </div>
    </div>
  )
}
