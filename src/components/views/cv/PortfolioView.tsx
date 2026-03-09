import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { HeroSection } from './HeroSection'
import { ExperienceSection } from './ExperienceSection'
import { SkillsSection } from './SkillsSection'
import { EducationSection } from './EducationSection'
import { LanguagesSection } from './LanguagesSection'
import { AdditionalSkillsSection } from './AdditionalSkillsSection'
import { ObjectiveSection } from './ObjectiveSection'
import { useTerminalCommands } from '../../../hooks/useTerminalCommands'
import { TerminalContext } from '../../../context/TerminalContext'

export const PortfolioView = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    // Enfocar el input interactivamente sin forzar scroll de la página hacia abajo
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus({ preventScroll: true });
        }
    }, []);

    // Inicializado con isBooted = true porque esta vista solo carga si el sistema ya arrancó
    const {
        typingStage,
        isFastForward,
        setIsFastForward,
        handleStageComplete,
        handleCommand
    } = useTerminalCommands(true);

    return (
        <TerminalContext.Provider value={{ isFastForward, setIsFastForward }}>
            <div className="flex-1 flex flex-col">
                <div className="space-y-24 pb-20">
                    <HeroSection isTyping={typingStage >= 1} onComplete={() => handleStageComplete(1)} />
                    <ExperienceSection isTyping={typingStage >= 2} onComplete={() => handleStageComplete(2)} />
                    <SkillsSection isTyping={typingStage >= 3} onComplete={() => handleStageComplete(3)} />
                    <EducationSection isTyping={typingStage >= 4} onComplete={() => handleStageComplete(4)} />
                    <LanguagesSection isTyping={typingStage >= 5} onComplete={() => handleStageComplete(5)} />
                    <AdditionalSkillsSection isTyping={typingStage >= 6} onComplete={() => handleStageComplete(6)} />
                    <ObjectiveSection isTyping={typingStage >= 7} onComplete={() => handleStageComplete(7)} />
                </div>

                {/* Input de comando interactivo (Sticky bottom) */}
                <div className="mt-auto border-t-2 border-[#1e8712] pt-4 pb-8 flex items-center bg-[var(--term-bg)] sticky bottom-0 z-50">
                    <span className="text-xl font-bold mr-2">{'>'}</span>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Escribe 'load' o 'skip' para acelerar la carga..."
                        className="bg-transparent border-none outline-none flex-1 text-lg text-[#39ff14] font-inherit placeholder:text-[#1e8712] placeholder:opacity-50"
                        onKeyDown={handleCommand}
                    />
                    <motion.div
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="w-3 h-6 bg-[#39ff14] ml-1"
                    />
                </div>
            </div>
        </TerminalContext.Provider>
    )
}
