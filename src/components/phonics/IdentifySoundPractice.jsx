import React, { useState } from 'react';

export default function IdentifySoundPractice({ item, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    if (onAnswer) {
      onAnswer(selectedOption === item.answer);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-yellow-50">
      <p className="text-lg font-semibold mb-2">Identify the sound for: <span className="text-blue-600">{item.word}</span></p>
      <div className="space-y-2 mb-4">
        {item.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !isSubmitted && setSelectedOption(option)}
            className={`block w-full p-2 text-left rounded
                        ${selectedOption === option ? 'bg-blue-200' : 'bg-white hover:bg-gray-100'}
                        ${isSubmitted && option === item.answer ? 'ring-2 ring-green-500' : ''}
                        ${isSubmitted && selectedOption === option && option !== item.answer ? 'ring-2 ring-red-500' : ''}`}
            disabled={isSubmitted}
          >
            {option}
          </button>
        ))}
      </div>
      {!isSubmitted && (
        <button
          onClick={handleSubmit}
          disabled={!selectedOption}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
        >
          Submit
        </button>
      )}
      {isSubmitted && (
        <p className={`mt-2 text-sm font-semibold ${selectedOption === item.answer ? 'text-green-600' : 'text-red-600'}`}>
          {selectedOption === item.answer ? 'Correct!' : `Incorrect. The answer is ${item.answer}.`}
        </p>
      )}
    </div>
  );
}
