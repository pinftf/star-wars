import React from 'react';

function SoundButton({ soundSrc }) {
  const playSound = () => {
    const audio = new Audio(soundSrc);
    audio.play();
  };
  return (
    // eslint-disable-next-line react/button-has-type
    <button className="sound-button" onClick={playSound}>
      Play Sound
    </button>
  );
}

export default SoundButton;
