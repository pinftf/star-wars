import React from 'react';
import SoundButton from './SoundButton';
import './Board.css';

function Board() {
  const sounds = [
    {
      name: 'Lightsaber',

      src: '../sounds/lightsaber.mp3',

      image: `${process.env.PUBLIC_URL}/images/lightsaber.jpg`,
    },
    {
      name: 'Chewbacca',

      src: '../sounds/chewbacca.mp3',

      image: `${process.env.PUBLIC_URL}/images/chewbacca.jpg`,
    },
    {
      name: 'Blaster',

      src: '../sounds/blaster.mp3',

      image: `${process.env.PUBLIC_URL}/images/blaster.jpg`,
    },
    {
      name: 'Vader',

      src: '../sounds/vader.mp3',

      image: `${process.env.PUBLIC_URL}/images/vader.jpg`,
    },
    {
      name: 'Destroyer',

      src: '../sounds/hyperspace.mp3',

      image: `${process.env.PUBLIC_URL}/images/destroyer.jpg`,
    },
  ];
  return (
    <div className="container">
      <div className="soundboard">
        <h2>Star Wars Soundboard</h2>
        <div className="sound-buttons">
          {sounds.map((sound) => (
            // eslint-disable-next-line react/jsx-no-undef
            <SoundButton
              key={sound.name}
              soundSrc={sound.src}
              title={sound.name}
              image={sound.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Board;
