export default function Ticker() {
  const items = [
    "100% Recycled Denim",
    "Handmade",
    "Unique Pieces",
    "Save the Water",
    "Eco-Rebel",
  ];

  return (
    <section className="bg-acid py-4 overflow-hidden border-y border-denim">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-8 mx-4">
            {items.map((text, j) => (
              <span
                key={`${i}-${j}`}
                className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-denim flex items-center gap-8"
              >
                {text}
                <span className="w-2 h-2 rounded-full bg-denim" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
