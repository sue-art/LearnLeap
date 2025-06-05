import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

export default function LearningListPage() {
  return (
    <div>
      <h1>Learning List Page</h1>
      <p>Categorized learning modules will be displayed here.</p>
      <Link to="/phonics" className="text-blue-500 hover:underline">Go to Phonics Learning</Link> {/* Add Link to PhonicsPage */}
    </div>
  );
}
