import React from "react";

const DurationDetail = ({ timeProgress }) => {
  // function for formating the time of the audio to show in minute and second
  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  return (
    <div className="h-[30%] ">
      <h1 className="text-center font-bold text-slate-600 text-1xl">
        Duration
      </h1>
      <span className="block bg-white h-[2px] relative top-[-3px] w-[70%] mx-auto"></span>
      <h2 className="text-2xl text-center font-thin ">
        {formatTime(timeProgress)}
      </h2>
    </div>
  );
};

export default DurationDetail;
