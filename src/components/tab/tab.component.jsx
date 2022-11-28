import MediaPlayer from "../media-player/media-player.component.jsx";
import FileBrowser from "../file-browser/file-browser.component.jsx";

const Tab = () => {
  return (
    <div className="tab">
      <h3>Tab Component</h3>
      <h4>
        <FileBrowser></FileBrowser>
        <MediaPlayer></MediaPlayer>
      </h4>
    </div>
  );
};

export default Tab;
