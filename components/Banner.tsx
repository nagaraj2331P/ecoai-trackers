import { Images, ImageUpscale } from "lucide-react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full h-60 bg-green-700 flex items-center justify-center relative shadow-md">
      <Images
        src="C:\Users\ADMIN\OneDrive\Desktop\eco-banner.jpg"
        alt="EcoAI Tracker Banner"
        style={{ objectFit: "cover" }}
        className="opacity-80"
      />
      <h1 className="text-white text-4xl md:text-6xl font-bold z-10">
        EcoAI Sustainability Tracker
      </h1>
    </div>
  );
}
