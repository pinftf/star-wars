import React from 'react';
import SoundButton from './SoundButton';
import  saber  from './lightsaber.mp3';

function Board() {
  const sounds = [
    {
      name: 'Lightsaber',
      src:  saber 
    },
    {
      name: 'Chewbacca',
      src: './chewbacca.mp3',
    },
  ];
  return (
    <div className="soundboard">
      <h2>Star Wars Soundboard</h2>
      <div className="sound-buttons">
        {sounds.map((sound) => (
          // eslint-disable-next-line react/jsx-no-undef
          <SoundButton key={sound.name} soundSrc={sound.src} />
        ))}
      </div>
    </div>
  );
}

export default Board;
