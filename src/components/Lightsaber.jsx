import React, { useState } from 'react';

function LightsaberDuel() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div className="lightsaber-duel" onMouseMove={handleMouseMove}>
      <Lightsaber position={position} />
      {/* Other duel-related components */}
    </div>
  );
}

function Lightsaber({ position }) {
  return (
    <div
      className="lightsaber"
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}

export default LightsaberDuel;
