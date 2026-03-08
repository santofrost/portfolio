import { motion } from 'framer-motion'
import { User, Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import { Typewriter } from './Typewriter'
import { useState, useEffect } from 'react'

export const HeroSection = ({ isTyping, onComplete }) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (isTyping && step === 0) setStep(1);
    }, [isTyping, step]);

    return (
        <motion.section className="terminal-border p-6 relative bg-[rgba(10,64,5,0.2)]">
            <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
                <User className="w-8 h-8" />
                <Typewriter text="VICENTE MARTÍN RUEDA" isTyping={step >= 1} onComplete={() => setStep(2)} />
            </h2>
            <p className="text-xl mb-4 text-[#1e8712]">
                <Typewriter text="<Software Engineer (Mid–Senior) />" isTyping={step >= 2} onComplete={() => setStep(3)} />
            </p>

            <div className="flex flex-wrap gap-4 mb-6 opacity-90 text-sm">
                <a href="mailto:santo.frost@gmail.com" className="flex items-center gap-2 hover:text-white">
                    <Mail className="w-4 h-4" /> <Typewriter text="santo.frost@gmail.com" isTyping={step >= 3} onComplete={() => setStep(4)} />
                </a>
                <a href="tel:+34685170346" className="flex items-center gap-2 hover:text-white">
                    <Phone className="w-4 h-4" /> <Typewriter text="+34 685170346" isTyping={step >= 4} onComplete={() => setStep(5)} />
                </a>
                <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> <Typewriter text="Alicante, España" isTyping={step >= 5} onComplete={() => setStep(6)} />
                </span>
                <a href="https://linkedin.com/in/vicente-mart%C3%ADn-rueda-350a80156" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                    <Linkedin className="w-4 h-4" /> <Typewriter text="LinkedIn" isTyping={step >= 6} onComplete={() => setStep(7)} />
                </a>
            </div>

            <p className="text-lg leading-relaxed border-t border-[#1e8712] pt-4">
                <Typewriter
                    text="Software Engineer con sólida experiencia en frontend, backend y arquitectura. Especializado en sistemas complejos de alta criticidad, liderazgo de equipos y comunicación técnica internacional. Acostumbrado a asumir ownership técnico y optimizar pipelines CI/CD y rendimiento."
                    isTyping={step >= 7}
                    onComplete={onComplete}
                />
            </p>
        </motion.section>
    )
}
