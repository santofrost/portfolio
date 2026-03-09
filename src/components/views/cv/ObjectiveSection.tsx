import { motion } from 'framer-motion'
import { Typewriter } from './Typewriter'
import { useState, useEffect } from 'react'

export interface SectionProps {
    isTyping: boolean;
    onComplete: () => void;
}

export const ObjectiveSection = ({ isTyping, onComplete }: SectionProps) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (isTyping && step === 0) setStep(1);
    }, [isTyping, step]);

    return (
        <motion.section className="space-y-4 terminal-border p-6 bg-[rgba(10,64,5,0.15)]">
            <h3 className="text-xl font-bold text-[#39ff14] mb-2">
                <Typewriter text="> OBJETIVO DEL SISTEMA" isTyping={step >= 1} onComplete={() => setStep(2)} />
            </h3>
            <p className="opacity-90 leading-relaxed font-bold">
                <Typewriter
                    text="Interesado en proyectos tecnológicos con impacto real, entornos colaborativos y equipos internacionales."
                    isTyping={step >= 2}
                    onComplete={onComplete}
                />
            </p>
        </motion.section>
    )
}
