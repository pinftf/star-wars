import React from 'react';

function SoundButton({ soundSrc }) {
  const playSound = () => {
    const audio = new Audio(soundSrc);
    audio.play();
  };
  return (
    <button type="button" className="sound-button" onClick={playSound}>
      Play Sound
    </button>
  );
}

export default SoundButton;
