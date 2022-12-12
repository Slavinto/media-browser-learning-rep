import MediaPlayer from "../media-player/media-player.component.jsx";
import FileBrowser from "../file-browser/file-browser.component.jsx";

const Tab = ({ children }) => {
  return (
    <div className="tab">
      <h4>{children}</h4>
    </div>
  );
};

export default Tab;
