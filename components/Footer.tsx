const ecoSuggestions = [
  {
    image: "/images/solar.jpg",
    alt: "Solar Power",
    text: "🌿Use solar energy to power your home🌿."
  },
  {
    image: "/images/recycle.jpg",
    alt: "Recycling",
    text: "♻️ Recycle waste to reduce landfill impact♻️."
  },
  {
    image: "/images/transport.jpg",
    alt: "Eco Transport",
    text: "🌍Use bicycles or electric vehicles🌍."
  },
  {
    image: "/images/tree.jpg",
    alt: "Tree Planting",
    text: "🌱Plant more trees to absorb CO₂🌱."
  }
];

export default function Footer() {
  return (
    <footer className="bg-green-100 py-30 px-30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {ecoSuggestions.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.image}
              alt={item.alt}
              className="w-30 h-30 object-cover rounded-lg mb-3"
            />
            <p className="text-sm text-green-900">{item.text}</p>
          </div>
        ))}
      </div>
      <p className="text-center mt-8 text-Blue-600 text-xs font-bold">
        🌍CREATED BY NAGARAJ🌍
      </p>
    </footer>
  );
}


