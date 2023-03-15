import React from "react";


// Display Component
const Display = ({ currentTrack, audioRef }) => {
  return (
    <div className="h-full">
      <audio src={currentTrack.src} ref={audioRef} />
      {/* thumbnail part */}
      <div className="border-b h-[80%]">
        {currentTrack.thumbnail ? (
          <img
            className="h-full"
            src={currentTrack.thumbnail}
            alt={currentTrack.title}
          />
        ) : null}
      </div>
      {/* info part */}
      <div className="border-t h-[20%] p-3">
        <h1 className="text-xl font-thin">
          Song: <span className="italic">{currentTrack.title}</span>
        </h1>
        <h2 className="mt-1">
          <span className="font-thin">Singer:</span> {currentTrack.singer}
        </h2>
      </div>
    </div>
  );
};

export default Display;
