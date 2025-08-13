import AnimeJSComponent from '../components/AnimeJSComponent';

export default function HeroSection() {
  return (
    <section className="relative py-24">
      <AnimeJSComponent
        animation={{
          opacity: [0, 1],
          translateY: [40, 0],
          duration: 900,
          easing: 'easeOutBack',
        }}
        className="text-5xl font-bold text-center mb-6"
      >
        Welcome to HomeStuco
      </AnimeJSComponent>
      <AnimeJSComponent
        animation={{
          opacity: [0, 1],
          translateY: [40, 0],
          duration: 900,
          delay: 200,
          easing: 'easeOutBack',
        }}
        className="text-xl text-center text-muted-foreground mb-10"
      >
        The official Student Council website
      </AnimeJSComponent>
      <div className="flex justify-center gap-4">
        {[0, 1, 2].map((i) => (
          <AnimeJSComponent
            key={i}
            animation={{
              opacity: [0, 1],
              scale: [0.8, 1],
              duration: 700,
              delay: 400 + i * 120, // stagger
              easing: 'easeOutBack',
            }}
            className="bg-gradient-to-br from-accent to-champagne/80 rounded-xl px-8 py-4 shadow-lg"
          >
            <span>Card {i + 1}</span>
          </AnimeJSComponent>
        ))}
      </div>
    </section>
  );
}
