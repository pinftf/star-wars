import React from 'react';
import './SoundButton.css';

function SoundButton({ soundSrc, title, image }) {
  const playSound = () => {
    const audio = new Audio(soundSrc);
    audio.play();
  };

  const buttonStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <button
      type="button"
      className="sound-button"
      onClick={playSound}
      style={buttonStyle}
    >
      {title}
    </button>
  );
}

export default SoundButton;
