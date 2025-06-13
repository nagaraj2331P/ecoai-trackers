'use client'; // 🔥 This makes it a client component so hooks can be used

import EcoTip from '@/components/EcoTip';
import CarbonCalculator from '@/components/CarbonCalculator';

export default function About() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">About EcoAI</h1>
      <p>We help users track and reduce their environmental footprint.</p>

      <EcoTip />
      <CarbonCalculator />
    </main>
  );
}

