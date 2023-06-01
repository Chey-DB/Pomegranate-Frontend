import React, { useState, useEffect } from 'react'

import rain from "../../assets/loud-rain.wav";
import white from "../../assets/white-noise.wav"

const Sounds = () => {

  const tracks = {
    WhiteNoise: white,
    Rain: rain
  }
  
  
  const [track, setTrack] = useState()

  useEffect(() => { let audio = new Audio(track)
    audio.loop = true
  },[track])

  return (
    <div>
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
      <button
        onClick={() => {
          audio.loop = true;
          audio.play();
        }}
      >
        Play
      </button>
      <button onClick={() => (audio.pause())}>Pause</button>
    </div>
  )
}

export default Sounds


