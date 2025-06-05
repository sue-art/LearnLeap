import React from 'react';
import PhonicsCard from './PhonicsCard';

export default function PhonicsGrid({ phonicsData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {phonicsData.map((phonic) => (
        <PhonicsCard
          key={phonic.id}
          letter={phonic.letter}
          sound={phonic.sound}
          image={phonic.image}
          examples={phonic.examples}
        />
      ))}
    </div>
  );
}
