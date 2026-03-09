import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { Typewriter } from './Typewriter'
import { useState, useEffect } from 'react'

export interface SectionProps {
    isTyping: boolean;
    onComplete: () => void;
}

export const LanguagesSection = ({ isTyping, onComplete }: SectionProps) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (isTyping && step === 0) setStep(1);
    }, [isTyping, step]);

    return (
        <motion.section className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-2 border-b border-[#1e8712] pb-2 inline-flex pr-8">
                <Globe className="w-6 h-6" />
                <Typewriter text="LANGUAGES.CFG" isTyping={step >= 1} onComplete={() => setStep(2)} />
            </h3>
            <ul className="list-disc list-inside space-y-2 opacity-90 pl-4 py-2">
                <li>
                    <span className="font-bold text-[#39ff14]">
                        <Typewriter text="Español" isTyping={step >= 2} onComplete={() => setStep(3)} />
                    </span> <Typewriter text=" — Nativo" isTyping={step >= 3} onComplete={() => setStep(4)} />
                </li>
                <li>
                    <span className="font-bold text-[#39ff14]">
                        <Typewriter text="Inglés" isTyping={step >= 4} onComplete={() => setStep(5)} />
                    </span> <Typewriter text=" — B1 certificado (Competencia profesional en entornos internacionales)" isTyping={step >= 5} onComplete={onComplete} />
                </li>
            </ul>
        </motion.section>
    )
}
