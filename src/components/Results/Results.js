import React from 'react';

const Results = ({ guesses }) => {
  return (
    <div className="results">
      <h2>Results</h2>
      <ul>
        {guesses.map((guess, index) => (
          <li key={index}>
            <div>
              Your guess: {guess.guess}°C (City: {guess.city})
            </div>
            <div>Actual temperature: {guess.actualTemp}°C</div>
            <div>{guess.isCorrect ? 'Correct!' : 'Wrong!'}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
