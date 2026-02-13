import { useState, useEffect } from "react";
import GrainOverlay from "@/components/GrainOverlay";
import Particles from "@/components/Particles";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  const [showName, setShowName] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [revealFaded, setRevealFaded] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowName(true), 600);
    const t2 = setTimeout(() => setShowSubtitle(true), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const handleReveal = () => {
    setRevealed(true);
    setTimeout(() => setRevealFaded(true), 300);
  };

  const monologueLines = [
    "You don't just listen.",
    "You understand.",
    "In a short time, you became someone I rely on.",
    "And that means more than I say.",
  ];

  return (
    <div className="relative">
      <GrainOverlay />
      <Particles active={revealed} />

      {/* Opening Frame */}
      <section className="min-h-screen flex flex-col items-center justify-center cinematic-gradient relative">
        <div className="spotlight absolute inset-0" />
        <div className="relative z-10 text-center px-6">
          <h1
            className={`font-serif text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight text-lavender glow-text transition-all duration-[2s] ease-out ${
              showName ? "opacity-100 blur-0" : "opacity-0 blur-[6px]"
            }`}
          >
            Kruthika.
          </h1>
          <p
            className={`mt-12 md:mt-16 font-sans text-lg md:text-xl font-light leading-relaxed text-lavender-soft tracking-wide transition-all duration-[2.5s] ease-out delay-300 ${
              showSubtitle ? "opacity-100 blur-0" : "opacity-0 blur-[4px]"
            }`}
          >
            Four months.
            <br />
            Somehow, that was enough.
          </p>
        </div>
      </section>

      {/* Scroll Monologue */}
      <section className="min-h-screen flex flex-col items-center justify-center py-32 px-6 relative">
        <div className="spotlight absolute inset-0" />
        <div className="max-w-2xl mx-auto space-y-24 md:space-y-32 relative z-10">
          {monologueLines.map((line, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <p className="font-serif text-2xl md:text-4xl lg:text-5xl font-normal text-foreground leading-snug text-center italic">
                "{line}"
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Central Statement */}
      <section className="min-h-[70vh] flex items-center justify-center px-6 relative">
        <div className="spotlight absolute inset-0" />
        <ScrollReveal className="relative z-10">
          <blockquote className="font-serif text-2xl md:text-4xl lg:text-5xl text-center leading-relaxed text-lavender glow-text max-w-3xl">
            Some bonds don't need history.
            <br />
            <span className="text-lavender-soft">They just need honesty.</span>
          </blockquote>
        </ScrollReveal>
      </section>

      {/* Hidden Reveal */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        {revealed && (
          <div className="fixed inset-0 bg-background/60 z-40 transition-opacity duration-1000" />
        )}

        {!revealed ? (
          <ScrollReveal>
            <button
              onClick={handleReveal}
              className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground border border-border px-8 py-4 rounded-full hover:text-lavender hover:border-primary/40 transition-all duration-700 hover:shadow-[0_0_30px_hsl(270_20%_72%/0.15)] relative z-10"
            >
              One More Thing.
            </button>
          </ScrollReveal>
        ) : (
          <div
            className={`relative z-50 text-center max-w-2xl transition-all duration-[2.5s] ease-out ${
              revealFaded ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-[6px] translate-y-8"
            }`}
          >
            <p className="font-serif text-2xl md:text-4xl lg:text-5xl leading-relaxed text-lavender glow-text">
              I choose you as my sister.
            </p>
            <p className="mt-6 font-sans text-base md:text-lg text-muted-foreground font-light">
              Not because I have to.
              <br />
              But because I want to.
            </p>
          </div>
        )}
      </section>

      {/* Final Frame */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 pb-20 relative">
        <ScrollReveal className="text-center relative z-10">
          <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-lavender glow-text">
            Happy Valentine's Day, Kruthika.
          </p>
          <p className="mt-10 font-sans text-sm md:text-base text-muted-foreground tracking-widest uppercase">
            — Your forever annoying brother
          </p>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Index;
