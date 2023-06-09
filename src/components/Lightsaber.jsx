import React, { useState, useEffect } from 'react';
import './Lightsaber.css';

function Lightsaber() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [objects, setObjects] = useState([]);

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleObjectClick = (index) => {
    setObjects((prevObjects) => {
      const updatedObjects = [...prevObjects];
      updatedObjects.splice(index, 1);
      return updatedObjects;
    });
  };

  useEffect(() => {
    const lightsaber = document.getElementById('lightsaber');
    lightsaber.style.left = `${position.x}px`;
    lightsaber.style.top = `${position.y}px`;

    objects.forEach((object, index) => {
      const objectRef = object.ref;
      if (objectRef.current) {
        const rect = objectRef.current.getBoundingClientRect();
        const isColliding =
          position.x > rect.left &&
          position.x < rect.right &&
          position.y > rect.top &&
          position.y < rect.bottom;

        if (isColliding) {
          handleObjectClick(index);
        }
      }
    });
  }, [position, objects]);

  return (
    <div className="lightsaber-container" onMouseMove={handleMouseMove}>
      <div
        id="lightsaber"
        className="lightsaber"
        onClick={() => handleObjectClick(-1)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            handleObjectClick(-1);
          }
        }}
      />
      {objects.map((object) => {
        const { id } = object;
        return (
          <div
            key={id}
            className="object"
            ref={object.ref}
            role="button"
            tabIndex={0}
            onClick={() => handleObjectClick(id)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                handleObjectClick(id);
              }
            }}
          />
        );
      })}
    </div>
  );
}

export default Lightsaber;
