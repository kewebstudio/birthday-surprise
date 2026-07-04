import Home from "./pages/Home";
import MusicPlayer from "./components/common/MusicPlayer";
import useMusic from "./hooks/useMusic";

function App() {
  const music = useMusic();

  return (
    <>
      <Home
        startMusic={music.setEnabled}
      />

      <MusicPlayer
        enabled={music.enabled}
      />
    </>
  );
}

export default App;