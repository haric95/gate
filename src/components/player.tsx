import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { IoMdPause, IoMdPlay } from "react-icons/io";

type PlayerProps = { link?: string; title?: string; artist?: string };

export const Player: React.FC<PlayerProps> = ({
  children,
  link,
  title,
  artist,
}: PropsWithChildren<PlayerProps>) => {
  const playerRef = useRef<ReactPlayer | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState<number | null>(null);
  const [seekTime, setSeekTime] = useState(0);
  const [playIndex, setPlayIndex] = useState(0);
  const [autoplayOn, setAutoplayOn] = useState(true);

  useEffect(() => {
    if (link) {
      if (autoplayOn) {
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(false);
    }
  }, [link, autoplayOn]);

  return (
    <>
      {" "}
      <ReactPlayer
        key={playIndex}
        ref={playerRef}
        url={link}
        width="1%"
        height="0px"
        playing={isPlaying}
        onProgress={(time) => setSeekTime(time.playedSeconds)}
        onDuration={(duration) => setDuration(duration)}
        onEnded={() => {
          setSeekTime(0);
          setIsPlaying(false);
        }}
      />
      <div className="player">
        <div className="player-left">
          <button
            className={`play-button ${link ? "" : "disabled"}`}
            onClick={() => {
              setIsPlaying((old) => {
                if (link) {
                  return !old;
                } else {
                  return old;
                }
              });
            }}
          >
            {isPlaying ? <IoMdPause /> : <IoMdPlay />}
          </button>
          <div className="track-info">
            <p className="track-artist">{artist}</p>
            <p className="track-title">{title}</p>
          </div>
        </div>
        {/* <div className="bar-container">
        <div
          className="bar-background"
          ref={barRef}
          onClick={(e) => {
            if (barRef.current) {
              const boundingRect = barRef.current.getBoundingClientRect();
              const clickPercentage =
                (e.clientX - boundingRect.left) / boundingRect.width;
              duration && setSeekTime(duration * clickPercentage);
              playerRef.current?.seekTo(clickPercentage);
            }
          }}
        >
          <div
            className="bar"
            style={{
              width: duration ? `${(seekTime / duration) * 100}%` : 0,
            }}
          ></div>
        </div>
      </div> */}
        <button
          className="autoplay"
          onClick={() => setAutoplayOn((prev) => !prev)}
        >
          {autoplayOn ? "Autoplay Is On" : "Autoplay Is Off"}
        </button>
      </div>
    </>
  );
};
