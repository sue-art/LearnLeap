import React, { useEffect, useState } from 'react';
import PhonicsModuleView from '../components/phonics/PhonicsModuleView';
import phonicsModulesData from '../data/phonics-modules-data.json'; // Import the new data file

export default function PhonicsPage() {
  const [modules, setModules] = useState([]);
  const [selectedModule, setSelectedModule] = useState(null);

  useEffect(() => {
    setModules(phonicsModulesData);
    // Optionally, select the first module by default
    if (phonicsModulesData.length > 0) {
      setSelectedModule(phonicsModulesData[0]);
    }
  }, []);

  const handleModuleSelect = (moduleId) => {
    const module = modules.find(m => m.id === moduleId);
    setSelectedModule(module);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row">
      {/* Sidebar/Navigation for Modules */}
      <div className="w-full md:w-1/4 p-4 border-r">
        <h2 className="text-2xl font-bold mb-4">Phonics Modules</h2>
        <nav>
          <ul>
            {modules.map((module) => (
              <li key={module.id} className="mb-2">
                <button
                  onClick={() => handleModuleSelect(module.id)}
                  className={`w-full text-left p-2 rounded hover:bg-blue-100 ${selectedModule && selectedModule.id === module.id ? 'bg-blue-200 font-semibold' : ''}`}
                >
                  {module.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content Area for Selected Module */}
      <div className="w-full md:w-3/4 p-4">
        {selectedModule ? (
          <PhonicsModuleView moduleData={selectedModule} />
        ) : (
          <p className="text-center text-gray-500">
            {modules.length > 0 ? "Select a module from the left to view its content." : "Loading phonics modules..."}
          </p>
        )}
      </div>
    </div>
  );
}
