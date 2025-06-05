import React, { useEffect, useState } from 'react';
import PhonicsGrid from '../components/phonics/PhonicsGrid';
// Assuming phonics-data.json is in src/data
import phonicsDataJson from '../data/phonics-data.json';

export default function PhonicsPage() {
  const [phonics, setPhonics] = useState([]);

  useEffect(() => {
    // In a real app, you might fetch this data from an API
    // For now, we're using the imported JSON data
    setPhonics(phonicsDataJson);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Learn Phonics</h1>
      {phonics.length > 0 ? (
        <PhonicsGrid phonicsData={phonics} />
      ) : (
        <p className="text-center">Loading phonics data...</p>
      )}
    </div>
  );
}
