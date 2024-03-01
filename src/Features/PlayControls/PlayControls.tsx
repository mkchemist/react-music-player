import { useSelector } from "react-redux";
import { RootState } from "../../store";

function PlayControls() {
  let songsStore = useSelector((state: RootState) => state.playlist);

  return (
    <ul
      className="nav justify-content-center align-items-center bg-dark p-0"
      style={{ height: "20%" }}
    >
      <li className="nav-item">
        <a href="" className="nav-link text-secondary">
          <i className="bx bx-shuffle bx-md"></i>
        </a>
      </li>
      <li className="nav-item">
        <a href="" className="nav-link text-secondary">
          <i className="bx bx-skip-previous-circle bx-md"></i>
        </a>
      </li>
      {songsStore.isPlaying ? (
        <li className="nav-item">
          <a href="" className="nav-link text-secondary">
            <i className="bx bx-stop-circle bx-md"></i>
          </a>
        </li>
      ) : (
        <li className="nav-item">
          <a href="" className="nav-link text-secondary">
            <i className="bx bx-play-circle bx-md"></i>
          </a>
        </li>
      )}
      <li className="nav-item">
        <a href="" className="nav-link text-secondary">
          <i className="bx bx-skip-next-circle bx-md"></i>
        </a>
      </li>
    </ul>
  );
}

export default PlayControls;
