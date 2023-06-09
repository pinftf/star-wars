import React, { useState } from 'react';
import './Translator.css';

function Translator() {
  const [englishText, setEnglishText] = useState('');

  return (
    <div className="translator">
      <h1>Galactic Translator</h1>
      <div>
        <textarea
          placeholder="Enter English Text"
          value={englishText}
          onChange={(e) => setEnglishText(e.target.value)}
        />
      </div>
      <button type="button" className="aurebesh-text">
        {englishText && (
          <p
            style={{
              fontFamily: 'Aurebesh, sans-serif',
            }}
          >
            {englishText}
          </p>
        )}
      </button>
    </div>
  );
}
export default Translator;
