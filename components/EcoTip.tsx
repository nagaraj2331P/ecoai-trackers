'use client';
import { useEffect, useState } from 'react';


export default function EcoTip() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % [
        'Turn off lights when not in use.',
        'Use reusable water bottles.',
        'Recycle electronics responsibly.',
        'Bike or walk instead of driving.',
        'Reduce meat consumption.'
      ].length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-green-100 rounded gap-6">
      🌱 Eco Tip: {[
        'Turn off lights when not in use.',
        'Use reusable water bottles.',
        'Recycle electronics responsibly.',
        'Bike or walk instead of driving.',
        'Reduce meat consumption.'
      ][index]}
    </div>
  );
}
