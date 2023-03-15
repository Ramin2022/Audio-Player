import React, { useState, useEffect, useRef, useCallback } from "react";

import {
  IoPauseSharp,
  IoPlaySharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForward,
} from "react-icons/io5";

// Buttons Component
const Buttons = ({
  audioRef,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  setTimeProgress,
}) => {
  // check if audio is played or no
  const [isPlayed, setIsPlayed] = useState(false);

  // reference for getting the seconds of the audio file
  const playTimeSecond = useRef();

  // paly & pause button function
  const togglePlayPause = () => {
    setIsPlayed((prev) => !prev);
  };

  // next song button fucntion
  const nextSong = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  // previous song button function
  const prevSong = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };

  // repeat is for getting seconds of the audio file
  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);

    playTimeSecond.current = requestAnimationFrame(repeat);
  }, [audioRef, setTimeProgress]);

  // intial rendering of the audio file
  useEffect(() => {
    if (isPlayed) {
      audioRef.current.play();
      playTimeSecond.current = requestAnimationFrame(repeat);
    } else {
      audioRef.current.pause();
      cancelAnimationFrame(playTimeSecond.current);
    }
  }, [isPlayed, audioRef, repeat]);

  return (
    <div className="flex flex-col items-center p-2">
      <button
        className="bg-black/30 mt-3 h-10 w-10 rounded-full flex justify-center items-center"
        onClick={togglePlayPause}
      >
        {isPlayed ? <IoPauseSharp size={20} /> : <IoPlaySharp size={20} />}
      </button>

      <button
        onClick={prevSong}
        className="bg-black/30 h-10 mt-3 w-10 rounded-full flex justify-center items-center"
      >
        <IoPlaySkipBackSharp size={20} />
      </button>

      <button
        onClick={nextSong}
        className="bg-black/30 mt-3 h-10 w-10 rounded-full flex justify-center items-center"
      >
        <IoPlaySkipForward size={20} />
      </button>
      {/* duration and length */}
    </div>
  );
};

export default Buttons;
