import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect, useRef, useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

function PlayerScreen() {
  let songsStore = useSelector((state: RootState) => state.playlist);
  let playingSong = useRef<HTMLAudioElement>(null);
  let [totalDuration, setTotalDuration] = useState(0);
  let [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (playingSong.current) {
      playingSong.current.src = URL.createObjectURL(
        songsStore.currentSelected as File
      );
      playingSong.current.addEventListener("progress", (event) => {
        setTotalDuration((event.target as HTMLAudioElement).duration);
      });
    }
  }, [songsStore.currentSelected]);

  useEffect(() => {
    if (playingSong.current) {
      if (songsStore.isPlaying) {
        playingSong.current.play();
      } else {
        playingSong.current.pause();
      }
    }
  }, [songsStore.isPlaying]);

  playingSong.current?.addEventListener("timeupdate", (event) => {
    setCurrentTime((event.target as HTMLAudioElement).currentTime);
  });

  return (
    <div style={{ height: "80%" }}>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "98%" }}
      >
        {songsStore.currentSelected ? (
          <div className="lead">
            {songsStore.isPlaying ? (
              <p className="mb-0">
                <i className="bx bx-play-circle"></i>
                <span className="mx-2">Now playing</span>
              </p>
            ) : (
              <p className="mb-0">
                <i className="bx bx-pause-circle"></i>
                <span className="mx-2">Stopped</span>
              </p>
            )}
            <p>{songsStore.currentSelected?.name}</p>
            <audio ref={playingSong}></audio>
            <p className="mb-0">{(totalDuration - currentTime).toFixed(2)}</p>
          </div>
        ) : (
          <div>No selected songs</div>
        )}
      </div>
      <ProgressBar total={totalDuration} current={currentTime}></ProgressBar>
    </div>
  );
}

export default PlayerScreen;
