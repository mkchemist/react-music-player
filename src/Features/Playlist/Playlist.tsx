import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { collect, removeSong, selectSong } from "./PlaylistSlice";

function Playlist() {
  let fileInputRef = React.useRef<HTMLInputElement>(null);
  let songsStore = useSelector((state: RootState) => state.playlist);
  const dispatch = useDispatch();

  let openFileUploader: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    event.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  let handleSongUpload: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    let files = Array.from(event.target.files as FileList);
    if (files.length) {
      dispatch(collect(files));
    }
  };

  return (
    <div className="p-lg-3 p-2" style={{ height: "100%" }}>
      <div
        className="d-flex align-items-center justify-content-between mb-2"
        style={{ height: "10%" }}
      >
        <p className="mb-0">Playlist ({songsStore.songs.length})</p>
        <div className="">
          <button
            className="btn btn-primary btn-sm btn-circle"
            onClick={openFileUploader}
          >
            <i className="bx bx-plus"></i>
          </button>
          <input
            type="file"
            className="d-none"
            multiple
            accept=".mp3"
            ref={fileInputRef}
            onChange={handleSongUpload}
          />
        </div>
      </div>
      <div
        className="border rounded p-lg-3 p-2"
        style={{
          height: "90%",
          overflow: "scroll",
          scrollbarWidth: "thin",
          scrollbarColor: "blue",
        }}
      >
        <ul className="nav px-0">
          {songsStore.songs.map((song, i) => (
            <li className="nav-item col-12" key={i}>
              <div className="row mx-auto justify-content-between small text-muted">
                <div className="row mx-auto col px-0">
                  <div className="col-auto p-0">
                    <button
                      className="btn p-0"
                      onClick={() => dispatch(selectSong(i))}
                    >
                      {i === songsStore.currentIndex && songsStore.isPlaying ? (
                        <i className="bx bx-pause"></i>
                      ) : (
                        <i className="bx bx-play"></i>
                      )}
                    </button>
                  </div>
                  <div className="col p-0">
                    <span className=" text-break">{song.name.trim()}</span>
                  </div>
                </div>
                <div className="col-auto p-0">
                  <button
                    className="btn"
                    onClick={() => dispatch(removeSong(i))}
                  >
                    <i className="bx bx-trash"></i>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Playlist;
