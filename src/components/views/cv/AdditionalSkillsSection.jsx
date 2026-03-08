import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'
import { Typewriter } from './Typewriter'
import { useState, useEffect } from 'react'

export const AdditionalSkillsSection = ({ isTyping, onComplete }) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (isTyping && step === 0) setStep(1);
    }, [isTyping, step]);

    return (
        <motion.section className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-2 border-b border-[#1e8712] pb-2 inline-flex pr-8">
                <Cpu className="w-6 h-6" />
                <Typewriter text="ADDITIONAL_SKILLS.DAT" isTyping={step >= 1} onComplete={() => setStep(2)} />
            </h3>
            <div className="grid md:grid-cols-2 gap-4 pt-2 opacity-90">
                <ul className="list-disc list-inside space-y-2">
                    <li><Typewriter text="Comunicación y presentaciones técnicas" isTyping={step >= 2} onComplete={() => setStep(3)} /></li>
                    <li><Typewriter text="Trabajo cómodo en equipos distribuidos e internacionales" isTyping={step >= 3} onComplete={() => setStep(4)} /></li>
                </ul>
                <ul className="list-disc list-inside space-y-2">
                    <li><Typewriter text="Liderazgo técnico y priorización de tareas" isTyping={step >= 4} onComplete={() => setStep(5)} /></li>
                    <li><Typewriter text="Agile / Scrum / Trato directo con cliente" isTyping={step >= 5} onComplete={onComplete} /></li>
                </ul>
            </div>
        </motion.section>
    )
}
