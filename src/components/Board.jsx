import React from 'react';
import SoundButton from './SoundButton';

function Board() {
  const sounds = [
    {
      name: 'Lightsaber',
      // eslint-disable-next-line global-require
      src: require('../sounds/lightsaber.mp3').default,
    },
    {
      name: 'Chewbacca',
      // eslint-disable-next-line global-require
      src: require('../sounds/lightsaber.mp3').default,
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
