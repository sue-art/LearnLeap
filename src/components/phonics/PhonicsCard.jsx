import React from 'react';

export default function PhonicsCard({ letter, sound, image, examples }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={`/src/assets/${image}`} alt={letter} className="w-full h-32 object-cover rounded-md mb-4" />
      <h2 className="text-2xl font-bold mb-2">{letter}</h2>
      <p className="text-xl text-gray-600 mb-2">{sound}</p>
      <ul className="list-disc list-inside">
        {examples.map((example, index) => (
          <li key={index}>{example}</li>
        ))}
      </ul>
    </div>
  );
}
