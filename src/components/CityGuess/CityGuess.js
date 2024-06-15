import React, { useState } from 'react';

const CityGuess = ({ city, onGuess }) => {
  const [guess, setGuess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuess(parseInt(guess, 10));
    setGuess('');
  };

  return (
    <div className="city-guess">
      <h2>Guess the temperature in {city}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CityGuess;
