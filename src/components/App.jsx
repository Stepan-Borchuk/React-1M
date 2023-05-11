import { AppBar } from "./AppBar";
import { VideoInfo } from "./VideoInfo";
import { VideoPlayer } from "./VideoPlayer";

export const App = () => {
  return (
    <div>
      <AppBar />
      <VideoPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U"/>
      <VideoInfo title="film" views="300" uploadDate="20 May 2020"/>
    </div>
  );
};
