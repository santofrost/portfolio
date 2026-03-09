import { motion } from 'framer-motion'
import { Code } from 'lucide-react'
import { Typewriter } from './Typewriter'
import { useState, useEffect } from 'react'

export interface SectionProps {
    isTyping: boolean;
    onComplete: () => void;
}

export const SkillsSection = ({ isTyping, onComplete }: SectionProps) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (isTyping && step === 0) setStep(1);
    }, [isTyping, step]);

    return (
        <motion.section className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-2 border-b border-[#1e8712] pb-2 inline-flex pr-8">
                <Code className="w-6 h-6" />
                <Typewriter text="COMPETENCIAS_CLAVE.DAT" isTyping={step >= 1} onComplete={() => setStep(2)} />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {/* Frontend */}
                <div className="border border-[#1e8712] p-4 bg-[rgba(10,64,5,0.1)]">
                    <h4 className="text-[#39ff14] font-bold mb-2 border-b border-[#1e8712] pb-1">
                        <Typewriter text="Frontend" isTyping={step >= 2} onComplete={() => setStep(3)} />
                    </h4>
                    <ul className="list-disc list-inside opacity-80 space-y-1">
                        <li><Typewriter text="Vue.js" isTyping={step >= 3} onComplete={() => setStep(4)} /></li>
                        <li><Typewriter text="React" isTyping={step >= 4} onComplete={() => setStep(5)} /></li>
                        <li><Typewriter text="JavaScript" isTyping={step >= 5} onComplete={() => setStep(6)} /></li>
                        <li><Typewriter text="HTML" isTyping={step >= 6} onComplete={() => setStep(7)} /></li>
                        <li><Typewriter text="CSS" isTyping={step >= 7} onComplete={() => setStep(8)} /></li>
                    </ul>
                </div>
                {/* Backend & DB */}
                <div className="border border-[#1e8712] p-4 bg-[rgba(10,64,5,0.1)]">
                    <h4 className="text-[#39ff14] font-bold mb-2 border-b border-[#1e8712] pb-1">
                        <Typewriter text="Backend & DB" isTyping={step >= 8} onComplete={() => setStep(9)} />
                    </h4>
                    <ul className="list-disc list-inside opacity-80 space-y-1">
                        <li><Typewriter text="Node.js" isTyping={step >= 9} onComplete={() => setStep(10)} /></li>
                        <li><Typewriter text=".NET" isTyping={step >= 10} onComplete={() => setStep(11)} /></li>
                        <li><Typewriter text="APIs REST" isTyping={step >= 11} onComplete={() => setStep(12)} /></li>
                        <li><Typewriter text="SQL Server" isTyping={step >= 12} onComplete={() => setStep(13)} /></li>
                        <li><Typewriter text="SQL" isTyping={step >= 13} onComplete={() => setStep(14)} /></li>
                    </ul>
                </div>
                {/* Arquitectura */}
                <div className="border border-[#1e8712] p-4 bg-[rgba(10,64,5,0.1)]">
                    <h4 className="text-[#39ff14] font-bold mb-2 border-b border-[#1e8712] pb-1">
                        <Typewriter text="Arquitectura & DevOps" isTyping={step >= 14} onComplete={() => setStep(15)} />
                    </h4>
                    <ul className="list-disc list-inside opacity-80 space-y-1">
                        <li><Typewriter text="Arquitectura frontend" isTyping={step >= 15} onComplete={() => setStep(16)} /></li>
                        <li><Typewriter text="Diseño de middleware" isTyping={step >= 16} onComplete={() => setStep(17)} /></li>
                        <li><Typewriter text="Multithreading & Rendimiento" isTyping={step >= 17} onComplete={() => setStep(18)} /></li>
                        <li><Typewriter text="Pipelines (CI/CD)" isTyping={step >= 18} onComplete={() => setStep(19)} /></li>
                        <li><Typewriter text="Automatización (Build/Deploy)" isTyping={step >= 19} onComplete={onComplete} /></li>
                    </ul>
                </div>
            </div>
        </motion.section>
    )
}
