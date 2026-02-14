import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import EnvelopeIntro from '@/components/EnvelopeIntro';
import LoadingScreen from '@/components/LoadingScreen';
import SmoothScroll from '@/components/effects/SmoothScroll';
import FilmGrain from '@/components/effects/FilmGrain';
import Vignette from '@/components/effects/Vignette';
import DustParticles from '@/components/effects/DustParticles';
import ParallaxBackground from '@/components/effects/ParallaxBackground';
import Section1Opening from '@/components/sections/Section1Opening';
import Section2Respect from '@/components/sections/Section2Respect';
import Section3Protective from '@/components/sections/Section3Protective';
import Section4Memory from '@/components/sections/Section4Memory';
import Section5Proud from '@/components/sections/Section5Proud';
import Section6Final from '@/components/sections/Section6Final';

const Index = () => {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const handleEnvelopeComplete = () => {
    setShowEnvelope(false);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Envelope Intro */}
      <AnimatePresence>
        {showEnvelope && (
          <EnvelopeIntro onComplete={handleEnvelopeComplete} />
        )}
      </AnimatePresence>

      {/* Loading Screen */}
      <AnimatePresence>
        {!showEnvelope && isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {/* Main Content with Smooth Scroll */}
      {!showEnvelope && !isLoading && (
        <SmoothScroll>
          <div className="relative w-full min-h-screen overflow-x-hidden">
            {/* Parallax background layer */}
            <ParallaxBackground />

            {/* Visual effects overlays */}
            <Vignette />
            <DustParticles />
            <FilmGrain />

            {/* Main content */}
            <main className="relative z-10">
              <Section1Opening />
              <Section2Respect />
              <Section3Protective />
              <Section4Memory />
              <Section5Proud />
              <Section6Final />
            </main>
          </div>
        </SmoothScroll>
      )}
    </>
  );
};

export default Index;
