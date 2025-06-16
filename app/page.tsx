'use client';
import AskAI from '@/components/AskAi';
import EcoTip from '@/components/EcoTip';
import CarbonCalculator from '@/components/CarbonCalculator';

export default function Home() {
  return (

    <main className="p-0">
      <h1 className="text-5xl text-center font-bold w-full h-20 bg-pink-700 flex items-center justify-center relative shadow-md">🌱EcoAI Sustainability Tracker</h1>
      <p className="text-2xl text-center">Welcome to the future of smart environmental tracking.</p>
      <p className="p-8"></p>
      <AskAI/>
      <p className="p-8"></p>
      <EcoTip />
      <CarbonCalculator />
    </main>
    
  );
}
