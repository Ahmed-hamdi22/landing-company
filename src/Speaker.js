import React from 'react'
import { SpeakerApper } from './Styedsp'

export default function Speaker({img,name,job}) {
  return (
    <SpeakerApper>
    <img src={img} width="100%"/>
    <h2>{name}</h2>
    <span>{job}</span>
    </SpeakerApper>
  )
}
