import AppNavbar from "./Features/Navbar/AppNavbar";
import PlayControls from "./Features/PlayControls/PlayControls";
import PlayerScreen from "./Features/PlayerScreen/PlayerScreen";
import Playlist from "./Features/Playlist/Playlist";

function App() {
  return (
    <div className="bg-light min-vh-100">
      <AppNavbar></AppNavbar>
      <div
        className="container bg-white p-0  mt-3 shadow-sm"
        style={{ height: 400 }}
      >
        <div className="row mx-auto" style={{ height: "100%" }}>
          <div
            className="col-lg-auto p-0"
            style={{ maxWidth: "25%", minWidth: "25%" }}
          >
            <Playlist></Playlist>
          </div>
          <div className="col-lg p-0">
            <PlayerScreen></PlayerScreen>
            <PlayControls></PlayControls>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
