import { useState, useEffect } from 'react';
import { playPipboyBlip } from '../utils/pipboy-sound';

export const useTerminalCommands = (isBooted: boolean) => {
    const [typingStage, setTypingStage] = useState(0);
    const [isFastForward, setIsFastForward] = useState(false);

    // Iniciar la secuencia de tipado cuando el arranque se complete
    useEffect(() => {
        if (isBooted && typingStage === 0) {
            setTypingStage(1);
        }
    }, [isBooted, typingStage]);

    // Lógica de sonido del teclado Fallout
    useEffect(() => {
        let clickInterval: ReturnType<typeof setInterval> | undefined;

        if (typingStage >= 1 && typingStage <= 7 && !isFastForward) {
            clickInterval = setInterval(playPipboyBlip, 50);
        }

        return () => {
            if (clickInterval) clearInterval(clickInterval);
        };
    }, [typingStage, isFastForward]);

    const handleStageComplete = (stage: number) => {
        if (typingStage < 99) {
            setTypingStage(stage + 1);
        }
    };

    const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const target = e.target as HTMLInputElement;
            const command = target.value.toLowerCase().trim();
            if (command === 'skip' || command === 'load' || command === 'fast') {
                setIsFastForward(true);
                setTypingStage(99);
            }
            target.value = '';
        }
    };

    return {
        typingStage,
        isFastForward,
        setIsFastForward,
        handleStageComplete,
        handleCommand
    };
};
