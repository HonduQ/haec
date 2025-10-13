"use client";

import { useState, useEffect } from 'react';

// Define the Horse type
type Horse = {
  id: number;
  showName: string;
  name: string | null;
  feed: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

function Horses() {
  const [horses, setHorses] = useState<Horse[]>([]);
  const [loading, setLoading] = useState(true);
  const [showName, setShowName] = useState('');
  const [feed, setFeed] = useState('');

  // Load horses when component mounts
  useEffect(() => {
    loadHorses();
  }, []);

  // Fetch horses from API
  async function loadHorses() {
    try {
      const response = await fetch('http://localhost:3000/horses');
      const data = await response.json();
      setHorses(data);
      setLoading(false);
    } catch (error) {
      console.error('Error loading horses:', error);
      setLoading(false);
    }
  }

  // Handle form submission
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/horses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ showName, feed })
      });

      if (response.ok) {
        // Clear form and reload horses
        setShowName('');
        setFeed('');
        loadHorses();
      }
    } catch (error) {
      console.error('Error adding horse:', error);
    }
  }

  // Filter out deleted horses
  const activeHorses = horses.filter(horse => !horse.deletedAt);

  if (loading) {
    return <div>Loading horses...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Horse Feed Schedule</h1>
      
      {/* Display horses */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Current Horses</h2>
        {activeHorses.length === 0 ? (
          <p>No horses yet. Add one below!</p>
        ) : (
          <div className="space-y-2">
            {activeHorses.map(horse => (
              <div key={horse.id} className="border p-4 rounded">
                <strong>{horse.showName}:</strong> {horse.feed}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add horse form */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Add New Horse</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Show Name:</label>
            <input
              type="text"
              value={showName}
              onChange={(e) => setShowName(e.target.value)}
              required
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Feed Instructions:</label>
            <input
              type="text"
              value={feed}
              onChange={(e) => setFeed(e.target.value)}
              required
              className="border p-2 rounded w-full"
            />
          </div>

          <button 
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Horse
          </button>
        </form>
      </div>
    </div>
  );
}

export default Horses;