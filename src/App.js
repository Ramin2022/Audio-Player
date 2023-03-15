import React, { useState, useRef } from "react";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import { tracks } from "./data/tracks";
import DurationDetail from "./components/DurationDetail";


// APP component
const App = () => {
  // states of the app
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [duration, setDuration] = useState(0);
  const [timeProgress, setTimeProgress] = useState(0);

  // referce to audio tag
  const audioRef = useRef();

  return (
    <>
      <h1 className="text-center mb-8 text-3xl uppercase">Audio player</h1>
      <div
        className="bg-white h-[450px] w-[380px] bg-gradient-to-r from-[rgba(51,75,182,0.5)] to-[rgba(118,75,162,0.5)] rounded-md flex
    "
      >
        <div className=" border-r flex flex-col justify-between flex-[0_0_25%]">
          {/* The Button Component */}
          <Buttons
            {...{
              audioRef,
              tracks,
              trackIndex,
              setTrackIndex,
              setCurrentTrack,
              setTimeProgress,
            }}
          />
          {/* Duration Detail Component */}
          <DurationDetail {...{ duration, timeProgress }} />
        </div>
        <div className=" flex-[1_0_0]">
          {/* Displaying screen component */}
          <Display {...{ currentTrack, audioRef, setDuration }} />
        </div>
      </div>
    </>
  );
};

export default App;
