import React, { useState } from 'react';
import CityGuess from '../CityGuess';
import Results from '../Results';
import fetchWeather from '../../utils/fetchWeather';

const cities = ['London', 'Kharkiv', 'Tokyo', 'Sydney', 'Monaco'];

const App = () => {
  const [guesses, setGuesses] = useState([]);
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleGuess = async (guess) => {
    const city = cities[currentCityIndex];
    const actualTemp = await fetchWeather(city);
    const isCorrect = Math.abs(guess - actualTemp) <= 5;

    setGuesses([...guesses, { city, guess, actualTemp, isCorrect }]);
    setScore(score + (isCorrect ? 1 : 0));

    if (currentCityIndex === 4) {
      setGameOver(true);
    } else {
      setCurrentCityIndex(currentCityIndex + 1);
    }
  };

  return (
    <div className="app">
      {gameOver ? (
        <div className={`result ${score >= 3 ? 'win' : 'loss'}`}>
          {score >= 3 ? 'You won!' : 'You lost!'}
        </div>
      ) : (
        <CityGuess city={cities[currentCityIndex]} onGuess={handleGuess} />
      )}
      <Results guesses={guesses} />
    </div>
  );
};

export default App;
