'use client';
import { useState } from 'react';

export default function CarbonCalculator() {
  const [miles, setMiles] = useState(0);
  const [result, setResult] = useState<number | null>(null);

  const handleCalc = () => {
    setResult(miles * 0.404); // 0.404kg CO2 per mile
  };

  return (
    <div className="p-4 bg-blue-100 rounded mt-4">
      <h2 className="font-bold">Carbon Calculator</h2>
      <input
        type="number"
        value={miles}
        onChange={(e) => setMiles(+e.target.value)}
        className="border p-1"
        placeholder="Miles driven"
      />
      <button onClick={handleCalc} className="ml-2 bg-blue-500 text-white px-2 py-1 rounded">
        Calculate
      </button>
      {result !== null && <p className="mt-2">CO₂: {result.toFixed(2)} kg</p>}
    </div>
  );
}
