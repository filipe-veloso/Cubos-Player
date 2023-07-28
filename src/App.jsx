import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import AudioPlayer from './Components/AudioPlayer/AudioPlayer';
import { musics } from './musics.jsx';

const App = () => {
  const [stateCard, setStateCard] = React.useState([...musics]);

  return (
    <>
      <Header />

      {/* MUSIC CARDS */}
      <main className="container--principal">
        <div className="main-title">
          <h2>The best play list</h2>
        </div>

        <div className="card-body">
          {stateCard.map((music) => (
            <div key={music.id}>
              <img src={music.cover} alt="" />
              <h2 className="card-title">{music.title}</h2>
              <p className="card-description">{music.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* controll bar */}

      <AudioPlayer />
    </>
  );
};

export default App;
