import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    isEmotionalZoom?: boolean;
}

const AnimatedText = ({
    children,
    className = '',
    delay = 0,
    duration = 1.4,
    isEmotionalZoom = false,
}: AnimatedTextProps) => {
    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                filter: 'blur(8px)',
                y: 30,
                scale: isEmotionalZoom ? 1.03 : 1,
            }}
            whileInView={{
                opacity: 1,
                filter: 'blur(0px)',
                y: 0,
                scale: 1,
            }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1], // easeInOut
            }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedText;
