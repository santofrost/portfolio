import { motion } from 'framer-motion'
import { HeroSection } from './components/views/cv/HeroSection'
import { ExperienceSection } from './components/views/cv/ExperienceSection'
import { SkillsSection } from './components/views/cv/SkillsSection'
import { EducationSection } from './components/views/cv/EducationSection'
import { LanguagesSection } from './components/views/cv/LanguagesSection'
import { AdditionalSkillsSection } from './components/views/cv/AdditionalSkillsSection'
import { ObjectiveSection } from './components/views/cv/ObjectiveSection'
import { TerminalContext } from './context/TerminalContext'
import { useBootSequence } from './hooks/useBootSequence'
import { useTerminalCommands } from './hooks/useTerminalCommands'

function App() {
  const { bootLog, isBooted } = useBootSequence();
  const {
    typingStage,
    isFastForward,
    setIsFastForward,
    handleStageComplete,
    handleCommand
  } = useTerminalCommands(isBooted);

  return (
    <TerminalContext.Provider value={{ isFastForward, setIsFastForward }}>
      <div className="w-full max-w-[95%] xl:max-w-7xl mx-auto h-full flex flex-col pt-8 px-4 sm:px-8">
        {/* Cabecera del Sistema */}
        <header className="mb-8 border-b-2 border-[#1e8712] pb-4 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-wider">DEV_TERMINAL</h1>
            <p className="opacity-80">Conexión establecida</p>
          </div>
          <div className="hidden sm:flex space-x-4 uppercase text-sm">
            <span>MEM: 640K OK</span>
            <span>SYS: ONLINE</span>
          </div>
        </header>

        {/* Área Principal */}
        <main className="flex-1 flex flex-col space-y-8">
          {/* Secuencia de arranque */}
          <div className="space-y-1 mb-8">
            {bootLog.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-lg"
              >
                {line}
              </motion.p>
            ))}

            {/* Cursor parpadeante mientras arranca */}
            {!isBooted && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-3 h-5 bg-[#39ff14] ml-1 align-middle"
              />
            )}
          </div>

          {/* Contenido Principal Revelado de forma Secuencial */}
          {isBooted && (
            <div className="space-y-24 pb-20">
              <HeroSection isTyping={typingStage >= 1} onComplete={() => handleStageComplete(1)} />
              <ExperienceSection isTyping={typingStage >= 2} onComplete={() => handleStageComplete(2)} />
              <SkillsSection isTyping={typingStage >= 3} onComplete={() => handleStageComplete(3)} />
              <EducationSection isTyping={typingStage >= 4} onComplete={() => handleStageComplete(4)} />
              <LanguagesSection isTyping={typingStage >= 5} onComplete={() => handleStageComplete(5)} />
              <AdditionalSkillsSection isTyping={typingStage >= 6} onComplete={() => handleStageComplete(6)} />
              <ObjectiveSection isTyping={typingStage >= 7} onComplete={() => handleStageComplete(7)} />
            </div>
          )}
        </main>

        {/* Input de comando interactivo (Sticky bottom) */}
        <div className="mt-8 border-t-2 border-[#1e8712] pt-4 pb-8 flex items-center bg-[var(--term-bg)] sticky bottom-0 z-50">
          <span className="text-xl font-bold mr-2">{'>'}</span>
          <input
            type="text"
            placeholder="Escribe 'load' o 'skip' para acelerar la carga..."
            className="bg-transparent border-none outline-none flex-1 text-lg text-[#39ff14] font-inherit placeholder:text-[#1e8712] placeholder:opacity-50"
            disabled={!isBooted}
            onKeyDown={handleCommand}
          />
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="w-3 h-6 bg-[#39ff14] ml-1"
          />
        </div>
      </div >
    </TerminalContext.Provider>
  )
}

export default App
