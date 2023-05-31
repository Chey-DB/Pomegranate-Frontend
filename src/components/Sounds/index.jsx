import React, { useState } from 'react'

import rain from "../../assets/loud-rain.wav";
import white from "../../assets/white-noise.wav"

const Sounds = () => {
  const audio = new Audio(rain);
  audio.loop = true;
  // const [audio, setAudio] = useState()

  return (
    <div>
      {/* <label> Select relaxing sound :
        <select
          value={audio}
          onChange={e => setAudio(e.target.value)}
        >
          <option>
            white
          </option>
          <option>
            rain
          </option>

        </select>
      </label> */}
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


