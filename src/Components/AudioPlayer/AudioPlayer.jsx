import React from 'react';

import Play from '../../assets/play.svg';
import Pause from '../../assets/pause.svg';
import Stop from '../../assets/stop.svg';
import Previous from '../../assets/previous.svg';
import Next from '../../assets/next.svg';

import './AudioPlayer.css';
import { musics } from '../../musics';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentSong, setCurrentSong] = React.useState(musics[0]);
  const audioRef = React.useRef(null);

  // Função para dar play/pause na música
  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  // Função para retroceder
  const handlePreviousClick = () => {
    const currentIndex = musics.indexOf(currentSong);
    const previousIndex = (currentIndex - 1 + musics.length) % musics.length;
    setCurrentSong(musics[previousIndex]);
  };

  // Função para avançar
  const handleNextClick = () => {
    const currentIndex = musics.indexOf(currentSong);
    const nextIndex = (currentIndex + 1) % musics.length;
    setCurrentSong(musics[nextIndex]);
  };

  return (
    <footer>
      <div className="container container-footer">
        <div className="area-music-artist">
          <h2>{currentSong.title}</h2>
          <p>{currentSong.artist}</p>
        </div>

        <div className="container-controlbar-progressbar">
          <div className="controlbar">
            <audio ref={audioRef} src={currentSong.url} />

            <img src={Stop} />
            <img src={Previous} onClick={handlePreviousClick} />
            <img onClick={handlePlayClick} src={isPlaying ? Pause : Play} />
            <img src={Next} onClick={handleNextClick} />
          </div>

          <div className="progressbar">
            <span>00:00</span>
            <input className="slider" type="range" />
            <span>01:00</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AudioPlayer;
