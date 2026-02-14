import CinematicSection from '@/components/effects/CinematicSection';
import AnimatedText from '@/components/effects/AnimatedText';

const Section5Proud = () => {
    return (
        <CinematicSection>
            <div className="max-w-4xl mx-auto text-center space-y-12">
                <AnimatedText delay={0.3} duration={1.4}>
                    <p className="text-2xl md:text-3xl font-sans text-silverGlow/80 leading-relaxed">
                        You know what's funny?
                    </p>
                </AnimatedText>

                <AnimatedText delay={0.8} duration={1.4}>
                    <p className="text-2xl md:text-3xl font-sans text-silverGlow/80 leading-relaxed">
                        I catch myself talking about you.
                    </p>
                </AnimatedText>

                <AnimatedText delay={1.3} duration={1.4}>
                    <p className="text-2xl md:text-3xl font-sans text-silverGlow/80 leading-relaxed">
                        More than I probably should.
                    </p>
                </AnimatedText>

                {/* Proud brother quote with stagger */}
                <div className="mt-20 space-y-4">
                    <AnimatedText delay={2.2} duration={1.4}>
                        <p className="text-2xl md:text-3xl font-sans text-silverGlow/70 italic leading-relaxed">
                            If someone asks about me,
                        </p>
                    </AnimatedText>

                    <AnimatedText delay={2.6} duration={1.4}>
                        <p className="text-2xl md:text-3xl font-sans text-silverGlow/70 italic leading-relaxed">
                            you just smile and say,
                        </p>
                    </AnimatedText>

                    <AnimatedText delay={3.2} duration={1.4}>
                        <p className="text-3xl md:text-4xl font-serif text-silverGlow/90 mt-6">
                            "Yeah, he's a little annoying…
                        </p>
                    </AnimatedText>

                    <AnimatedText delay={3.8} duration={1.6} isEmotionalZoom>
                        <p className="text-3xl md:text-4xl font-serif text-silverGlow text-glow">
                            but he's my brother."
                        </p>
                    </AnimatedText>
                </div>

                {/* Main emotional line */}
                <AnimatedText delay={5.0} duration={1.8} isEmotionalZoom>
                    <p className="text-4xl md:text-6xl font-serif text-silverGlow text-glow-pulse tracking-wider mt-20">
                        I'm proud you're my Akka.
                    </p>
                </AnimatedText>
            </div>
        </CinematicSection>
    );
};

export default Section5Proud;
