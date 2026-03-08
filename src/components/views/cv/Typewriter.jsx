import { motion } from 'framer-motion';
import { useTerminal } from '../../../context/TerminalContext';
import { useEffect } from 'react';

export const Typewriter = ({ text, delay = 0, isTyping = false, onComplete }) => {
    const characters = text.split("");
    const { isFastForward } = useTerminal();

    // If fast forward is ordered, immediately trigger onComplete so subsequent steps unlock.
    useEffect(() => {
        if (isFastForward && isTyping && onComplete) {
            const timer = setTimeout(() => {
                onComplete();
            }, 0);
            return () => clearTimeout(timer);
        }
    }, [isFastForward, isTyping, onComplete]);

    return (
        <motion.span
            initial="hidden"
            animate={isTyping ? "visible" : "hidden"}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: isFastForward ? 0 : 0.015,
                        delayChildren: isFastForward ? 0 : delay,
                    },
                },
                hidden: {},
            }}
            onAnimationComplete={(definition) => {
                // Enlaza la completitud normal si no estamos en fast-forward
                if (!isFastForward && definition === "visible" && onComplete) {
                    onComplete();
                }
            }}
        >
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    variants={{
                        hidden: { opacity: 0, display: "none" },
                        visible: { opacity: 1, display: "inline-block" },
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
};
