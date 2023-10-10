import React from 'react'

//components
import Artists from './Artists';
import Button from './Button';
// styles
import '../styles/General.scss';
//files
import stageImage from '../assets/images/stage.jpeg'
import peja from '../assets/images/artists/peja.jpg'
import mata from '../assets/images/artists/mata.jpg'
import djdecks from '../assets/images/artists/djdecks.jpg'


export default function General() {

    const artistsData = {
        peja: {
            name: 'peja',
            type: 'old-school',
            stage: 'old-school stage',
            time: '23:00-24:00'
        },
        mata: {
            name: 'mata',
            type: 'new-school',
            stage: 'new-school stage',
            time: '23:00-24:00'
        },
        djdecks: {
            name: 'dj decks',
            type: 'dj',
            stage: 'old-school stage',
            time: '00:00-02:00'
        },
    }

  return (
    <section className='general-info'>
        <span className='general-info__title'>Topowi polscy artyści!</span>
        <span className='general-info__description'>
            Najlepsi old-schoolowi i new-schoolowi wykonawcy w jednym miejscu!
        </span>
        <div className='artists-wrapper'>
            <Artists
                image={peja}
                name={artistsData.peja.name}
                type={artistsData.peja.type}
                stage={artistsData.peja.stage}
                time={artistsData.peja.time}
            />
            <Artists
                image={mata}
                name={artistsData.mata.name}
                type={artistsData.mata.type}
                stage={artistsData.mata.stage}
                time={artistsData.mata.time}
            />
            <Artists
                image={djdecks}
                name={artistsData.djdecks.name}
                type={artistsData.djdecks.type}
                stage={artistsData.djdecks.stage}
                time={artistsData.djdecks.time}
            />
        </div>
        <div className="general-info__stage">
            <div className="stage-img-wrapper">
                <img className='general-info__stage_image' src={stageImage} alt='stage image'/>
            </div>
            <div className="general-info__stage_description">
                <div className='general-info__stage_description_title'>
                    3 sceny 3 światy!
                </div>
                <span className="general-info__stage_description_desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, obcaecati dolores? Asperiores error reprehenderit id deleniti praesentium nobis accusantium corrupti architecto, reiciendis quos, fuga quis veritatis inventore libero doloribus nostrum?
                </span>
            </div>
        </div>
    </section>
  )
}
