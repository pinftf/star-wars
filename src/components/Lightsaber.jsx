import React, { useState, useEffect } from 'react';
import './Lightsaber.css';

function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

function Lightsaber({ additionalObjects }) {
  const [lightsaberPosition, setLightsaberPosition] = useState({
    x: 0,
    y: 0,
  });
  const [objects, setObjects] = useState([]);

  const handleMouseMove = (event) => {
    const lightsaberWidth = 4;
    const lightsaberHeight = 400;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const lightsaberX = mouseX - lightsaberWidth / 2;
    const lightsaberY = mouseY - lightsaberHeight;

    setLightsaberPosition({
      x: lightsaberX,
      y: lightsaberY,
    });

    setObjects((prevObjects) => {
      return prevObjects.map((object) => {
        const rect = object.ref.current.getBoundingClientRect();
        const isColliding =
          lightsaberX > rect.left &&
          lightsaberX < rect.right &&
          lightsaberY > rect.top &&
          lightsaberY < rect.bottom;

        return {
          id: object.id,
          ref: object.ref,
          visible: !isColliding,
        };
      });
    });
  };

  useEffect(() => {
    const newObjects = additionalObjects.map(() => ({
      id: generateUniqueId(),
      ref: React.createRef(),
      visible: true,
    }));

    setObjects(newObjects);
  }, [additionalObjects]);

  return (
    <div className="lightsaber-container" onMouseMove={handleMouseMove}>
      <div
        id="lightsaber"
        className="lightsaber"
        style={{
          left: lightsaberPosition.x,
          top: lightsaberPosition.y,
        }}
      />
      {objects.map((object) => (
        <div
          key={object.id}
          className="object"
          ref={object.ref}
          style={{
            visibility: object.visible ? 'visible' : 'hidden',
          }}
        />
      ))}
    </div>
  );
}

export default Lightsaber;
