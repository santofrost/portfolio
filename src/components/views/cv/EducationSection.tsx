import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'
import { Typewriter } from './Typewriter'
import { useState, useEffect } from 'react'

export interface SectionProps {
    isTyping: boolean;
    onComplete: () => void;
}

export const EducationSection = ({ isTyping, onComplete }: SectionProps) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (isTyping && step === 0) setStep(1);
    }, [isTyping, step]);

    return (
        <motion.section className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-2 border-b border-[#1e8712] pb-2 inline-flex pr-8">
                <Terminal className="w-6 h-6" />
                <Typewriter text="EDUCATION.SYS" isTyping={step >= 1} onComplete={() => setStep(2)} />
            </h3>

            <div className="space-y-4 pt-4">
                <div className="border border-[#1e8712] p-4 bg-[rgba(10,64,5,0.1)] transition-colors hover:bg-[rgba(10,64,5,0.3)]">
                    <h4 className="font-bold text-lg text-[#39ff14]">
                        <Typewriter text="Grado en Ingeniería Informática" isTyping={step >= 2} onComplete={() => setStep(3)} />
                    </h4>
                    <p className="opacity-80">
                        <Typewriter text="Especialización en Ingeniería del Software | Universidad de Alicante" isTyping={step >= 3} onComplete={() => setStep(4)} />
                    </p>
                </div>
                <div className="border border-[#1e8712] p-4 bg-[rgba(10,64,5,0.1)] transition-colors hover:bg-[rgba(10,64,5,0.3)]">
                    <h4 className="font-bold text-lg text-[#39ff14]">
                        <Typewriter text="Técnico Superior en Desarrollo de Aplicaciones Informáticas" isTyping={step >= 4} onComplete={() => setStep(5)} />
                    </h4>
                    <p className="opacity-80">
                        <Typewriter text="I.E.S. Mare Nostrum" isTyping={step >= 5} onComplete={() => setStep(6)} />
                    </p>
                </div>
                <div className="border border-[#1e8712] p-4 bg-[rgba(10,64,5,0.1)] transition-colors hover:bg-[rgba(10,64,5,0.3)]">
                    <h4 className="font-bold text-lg text-[#39ff14]">
                        <Typewriter text="Técnico en Explotación de Sistemas Informáticos" isTyping={step >= 6} onComplete={() => setStep(7)} />
                    </h4>
                    <p className="opacity-80">
                        <Typewriter text="I.E.S. Mare Nostrum" isTyping={step >= 7} onComplete={onComplete} />
                    </p>
                </div>
            </div>
        </motion.section>
    )
}
