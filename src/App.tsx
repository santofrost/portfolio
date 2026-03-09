import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useBootSequence } from './hooks/useBootSequence'
import { Sidebar } from './components/layout/Sidebar'
import { PortfolioView } from './components/views/cv/PortfolioView'
import { GameView } from './components/views/game/GameView'

function App() {
  const { bootLog, isBooted } = useBootSequence();
  const [currentView, setCurrentView] = useState<'portfolio' | 'game'>('portfolio');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-full max-w-[95%] xl:max-w-7xl mx-auto h-full flex flex-col pt-8 px-4 sm:px-8">
      {/* Cabecera del Sistema */}
      <header className="mb-8 border-b-2 border-[#1e8712] pb-4 flex justify-between items-end">
        <div className="flex items-center gap-4">
          {isBooted && (
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden lg:block terminal-border px-3 py-1 hover:bg-[var(--term-green-dark)] hover:text-white transition-colors duration-200 text-sm tracking-widest font-bold"
            >
              [ MENU ]
            </button>
          )}
          <div>
            <h1 className="text-3xl font-bold tracking-wider">DEV_TERMINAL</h1>
            <p className="opacity-80">Conexión establecida</p>
          </div>
        </div>
        <div className="hidden sm:flex space-x-4 uppercase text-sm">
          <span>MEM: 640K OK</span>
          <span>SYS: ONLINE</span>
        </div>
      </header>

      {/* Área Principal */}
      <main className="flex-1 flex flex-col space-y-8">
        {/* Secuencia de arranque (solo se muestra mientras no esté booted) */}
        {!isBooted && (
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

            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="inline-block w-3 h-5 bg-[#39ff14] ml-1 align-middle"
            />
          </div>
        )}

        {/* Contenido Principal con Sidebar y Vistas */}
        {isBooted && (
          <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
            <AnimatePresence>
              {isSidebarOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0, x: -50 }}
                  animate={{ width: "auto", opacity: 1, x: 0 }}
                  exit={{ width: 0, opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  <Sidebar currentView={currentView} onViewChange={setCurrentView} />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex-1 overflow-y-auto w-full">
              {currentView === 'portfolio' ? <PortfolioView /> : <GameView />}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
