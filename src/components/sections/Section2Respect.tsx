import CinematicSection from '@/components/effects/CinematicSection';
import AnimatedText from '@/components/effects/AnimatedText';
import { motion } from 'framer-motion';

const Section2Respect = () => {
    return (
        <CinematicSection className="relative">
            {/* Background repeating text drift (barely visible) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-50">
                <motion.div
                    className="text-[12rem] md:text-[20rem] font-serif text-silverGlow/[0.03] whitespace-nowrap"
                    animate={{
                        x: ['-100%', '100%'],
                    }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    KRUTHIKA KRUTHIKA KRUTHIKA KRUTHIKA KRUTHIKA
                </motion.div>
            </div>

            <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                <AnimatedText delay={0.3} duration={1.4}>
                    <p className="text-2xl md:text-3xl font-sans text-silverGlow/80 leading-relaxed">
                        I don't say this often.
                    </p>
                </AnimatedText>

                <AnimatedText delay={0.8} duration={1.4}>
                    <p className="text-2xl md:text-3xl font-sans text-silverGlow/80 leading-relaxed">
                        But when I do,
                    </p>
                </AnimatedText>

                <AnimatedText delay={1.3} duration={1.4}>
                    <p className="text-2xl md:text-3xl font-sans text-silverGlow/80 leading-relaxed">
                        I mean it.
                    </p>
                </AnimatedText>

                {/* Emotional zoom on "respect" */}
                <AnimatedText delay={2.0} duration={1.6} isEmotionalZoom>
                    <p className="text-4xl md:text-6xl font-serif text-silverGlow text-glow tracking-wider mt-16">
                        I genuinely respect you, Akka.
                    </p>
                </AnimatedText>

                <AnimatedText delay={3.0} duration={1.4}>
                    <p className="text-xl md:text-2xl font-sans text-silverGlow/70 leading-relaxed mt-12">
                        Not because you're older.
                    </p>
                </AnimatedText>

                <AnimatedText delay={3.5} duration={1.4}>
                    <p className="text-xl md:text-2xl font-sans text-silverGlow/70 leading-relaxed">
                        Not because I have to.
                    </p>
                </AnimatedText>

                <AnimatedText delay={4.0} duration={1.6} isEmotionalZoom>
                    <p className="text-2xl md:text-3xl font-serif text-silverGlow text-glow-pulse tracking-wider mt-8">
                        But because you've earned it.
                    </p>
                </AnimatedText>
            </div>
        </CinematicSection>
    );
};

export default Section2Respect;
