import React from 'react';
import IdentifySoundPractice from './IdentifySoundPractice';
import MatchGraphemeToSoundPractice from './MatchGraphemeToSoundPractice';

export default function PhonicsModuleView({ moduleData }) {
  if (!moduleData) {
    return <p>Module data not found.</p>;
  }

  const { name, definition, examples, practiceItems } = moduleData;

  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">{name}</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700">Definition:</h3>
        <p className="text-gray-800 whitespace-pre-line">{definition}</p>
      </div>

      {examples && examples.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Examples:</h3>
          <ul className="list-disc list-inside pl-4 text-gray-800">
            {examples.map((example, index) => (
              <li key={index}>
                {example.word ? (
                  <>
                    <strong>{example.word}</strong>: {Array.isArray(example.phonemes) ? example.phonemes.join(", ") : JSON.stringify(example)}
                  </>
                ) : example.sound ? (
                  <>
                    Sound: <strong>{example.sound}</strong>, Graphemes: {Array.isArray(example.graphemes) ? example.graphemes.join(", ") : JSON.stringify(example)}
                  </>
                ) : (
                  JSON.stringify(example)
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {practiceItems && practiceItems.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Practice Items:</h3>
          <div className="space-y-4">
            {practiceItems.map((item, index) => (
              <div key={index} className="p-3 border rounded-md bg-gray-50">
                {item.type === 'identify_sound' ? (
                  <IdentifySoundPractice item={item} />
                ) : item.type === 'match_grapheme_to_sound' ? (
                  <MatchGraphemeToSoundPractice item={item} />
                ) : (
                  // Keep the existing preformatted JSON for other types for now
                  <div>
                    <p className="font-medium text-gray-700">Type: {item.type}</p>
                    <pre className="text-sm text-gray-600 bg-gray-100 p-2 rounded mt-1">
                      {JSON.stringify(item, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
