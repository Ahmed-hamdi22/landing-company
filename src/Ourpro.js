import { faClock, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import { OurApper } from './Ourstyled'
import { Im } from './Ourstyled'
import { ImageApper } from './Ourstyled'
import { IconApper } from './Ourstyled'

export default function Ourpro({img,time,room,titel,name,desc}) {
  return (
    <OurApper>
    <ImageApper>
        <Im src={img}/>
    </ImageApper>
    <div >
        <IconApper>
            <div><FontAwesomeIcon style={{padding:" 0 0.4rem 0  0.4rem"}}  size='xs' icon={faClock}/>{time}</div>
            
        <div>  <FontAwesomeIcon style={{padding:" 0 0.4rem 0  0.4rem"}} size='xs' icon={faMapMarker}/>
        <span>room</span>
        {room}
                    </div>
        </IconApper>
        <h2>{titel}</h2>
        <span>{name}</span>
        <p>{desc}</p>
    </div>
</OurApper>
  )
}
