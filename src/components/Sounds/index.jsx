import React, { useState, useEffect } from 'react'

import loudRain from "../../assets/loud-rain.wav";
import white from "../../assets/white-noise.wav"
import waves from "../../assets/ocean-waves.wav"
import rain from "../../assets/peaceful-rain.wav"

const Sounds = () => {
  const [track, setTrack] = useState(waves)

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

  return (
    <div>
      <div className='formContainer'>
        <label> Select relaxing sound :    
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
        <button
          onClick={() => {
            music.play();
          }}
        >
          Play
        </button>
        <button onClick={() => (music.pause())}>Pause</button>
      </div>
    </div>
  )
}

export default Sounds


