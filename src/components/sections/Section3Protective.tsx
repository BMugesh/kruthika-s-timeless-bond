import CinematicSection from '@/components/effects/CinematicSection';
import AnimatedText from '@/components/effects/AnimatedText';

const Section3Protective = () => {
    return (
        <CinematicSection>
            <div className="max-w-4xl mx-auto text-center space-y-12">
                <AnimatedText delay={0.3} duration={1.4}>
                    <p className="text-2xl md:text-3xl font-sans text-silverGlow/80 leading-relaxed">
                        If anyone tries to mess with you,
                    </p>
                </AnimatedText>

                <AnimatedText delay={0.8} duration={1.4}>
                    <p className="text-2xl md:text-3xl font-sans text-silverGlow/80 leading-relaxed">
                        they'll have to deal with me first.
                    </p>
                </AnimatedText>

                <AnimatedText delay={1.5} duration={1.6} isEmotionalZoom>
                    <p className="text-4xl md:text-6xl font-serif text-silverGlow text-glow tracking-wider mt-16">
                        No conditions.
                    </p>
                </AnimatedText>

                <AnimatedText delay={2.5} duration={1.4}>
                    <p className="text-xl md:text-2xl font-sans text-silverGlow/70 leading-relaxed mt-12">
                        No questions asked.
                    </p>
                </AnimatedText>

                <AnimatedText delay={3.0} duration={1.4}>
                    <p className="text-xl md:text-2xl font-sans text-silverGlow/70 leading-relaxed">
                        That's just how it is.
                    </p>
                </AnimatedText>

                {/* Softer emotional ending */}
                <AnimatedText delay={3.8} duration={1.6}>
                    <p className="text-2xl md:text-3xl font-sans text-silverGlow/70 italic mt-20">
                        Even if I don't say it every day.
                    </p>
                </AnimatedText>
            </div>
        </CinematicSection>
    );
};

export default Section3Protective;
