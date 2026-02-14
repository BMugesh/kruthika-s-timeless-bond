import { motion } from 'framer-motion';

const DustParticles = () => {
    // Increased particle count for more cinematic atmosphere
    const particleCount = 20;

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-9997">
            {[...Array(particleCount)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-[2px] h-[2px] bg-silverGlow/[0.15] rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -100, -200], // Slow upward drift
                        x: [0, Math.random() * 20 - 10, Math.random() * 40 - 20], // Slight horizontal drift
                        opacity: [0, 0.4, 0],
                        scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 8 + Math.random() * 6, // Slower, more varied
                        delay: Math.random() * 5,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
            ))}
        </div>
    );
};

export default DustParticles;
