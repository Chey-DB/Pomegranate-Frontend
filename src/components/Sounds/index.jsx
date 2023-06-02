import React, { useState, useEffect } from 'react'

import loudRain from "../../assets/loud-rain.wav";
import white from "../../assets/white-noise.wav"
import waves from "../../assets/ocean-waves.wav"
import rain from "../../assets/peaceful-rain.wav"

import './style.css'

const Sounds = () => {
  const [track, setTrack] = useState(waves)
  // const [playing, setPlaying] = useState(false)

  const tracks = {
    'Ocean Waves': waves,
    'White Noise': white,
    'Loud Rain': loudRain,
    'Peaceful Rain': rain
  }

  const music = new Audio(track)
  music.loop = true

  useEffect(() => {new Audio(track)
  },[track])

  const playTrack = () => {
    // setPlaying(true)
    music.play()

  }

  const pauseTrack = () => {
    // setPlaying(false)
    music.pause()

  }

  return (
    <div className='music-container'>
      <div className='form-container'>
        <label className='form-label'> Relaxing Sounds :
          <select
            value={track}
            onChange={e => setTrack(e.target.value)}
            > {Object.entries(tracks).map(([name, value]) =>(
              <option key={`${name}`} value={value}>
                {name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className='button-container'>
        <button onClick={playTrack}>Play</button>
        <button onClick={pauseTrack}>Pause</button>
      </div>
    </div>
  )
}

export default Sounds


