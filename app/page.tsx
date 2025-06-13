'use client';
import AskAI from '@/components/AskAi';
import EcoTip from '@/components/EcoTip';
import CarbonCalculator from '@/components/CarbonCalculator';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">EcoAI Sustainability Tracker</h1>
      <p>Welcome to the future of smart environmental tracking.</p>

      <AskAI />
      <EcoTip />
      <CarbonCalculator />
    </main>
  );
}
