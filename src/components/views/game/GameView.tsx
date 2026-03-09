import { motion } from 'framer-motion';

export const GameView = () => {
    return (
        <section className="flex-1 terminal-border p-8 bg-[rgba(10,64,5,0.2)] flex flex-col items-center justify-center min-h-[400px]">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <div className="text-6xl mb-6">🎮</div>
                <h2 className="text-3xl font-bold mb-4">INICIANDO HOLOTAPE...</h2>
                <div className="w-64 h-4 border border-[#39ff14] mx-auto mb-6 p-0.5">
                    <motion.div
                        className="h-full bg-[#39ff14]"
                        initial={{ width: "0%" }}
                        animate={{ width: ["0%", "45%", "60%", "100%"] }}
                        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: 'reverse' }}
                    />
                </div>
                <p className="text-xl text-[#1e8712] animate-pulse">
                    Módulo de juego en desarrollo. Vuelva más tarde.
                </p>
            </motion.div>
        </section>
    );
};
