import React, { useState } from 'react';
import Lightsaber from '../components/Lightsaber';
import '../components/Object.css';

function Duel() {
  const [objectIdCounter, setObjectIdCounter] = useState(1);
  const [additionalObjects, setAdditionalObjects] = useState([]);

  const handleCreateObject = () => {
    const newObjectId = objectIdCounter + 1;
    setObjectIdCounter(newObjectId);

    const newObject = {
      id: newObjectId,
      x: 100,
      y: 100,
    };

    setAdditionalObjects((prevObjects) => [...prevObjects, newObject]);
  };

  return (
    <div>
      <button type="button" onClick={handleCreateObject}>
        Create Object
      </button>
      <Lightsaber additionalObjects={additionalObjects} />
    </div>
  );
}

export default Duel;
