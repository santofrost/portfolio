import { useState, useEffect } from 'react';

const BOOT_SEQUENCE = [
    "ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM",
    "COPYRIGHT 2075-2077 ROBCO INDUSTRIES",
    "-Server 1-",
    "Booting system...",
    "Loading kernel modules................... DONE",
    "Mounting local filesystems............... DONE",
    "Initializing network interfaces.......... DONE",
    "Accessing user profile data.............. GRANTED",
    "> Bienvenido/a al portfolio interactivo v1.0",
];

export const useBootSequence = () => {
    const [bootLog, setBootLog] = useState<string[]>([]);
    const [isBooted, setIsBooted] = useState(false);

    useEffect(() => {
        let i = 0;
        if (i < BOOT_SEQUENCE.length) {
            const interval = setInterval(() => {
                setBootLog(prev => [...prev, BOOT_SEQUENCE[i]]);
                i++;
                if (i >= BOOT_SEQUENCE.length) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsBooted(true);
                    }, 800);
                }
            }, 400);

            return () => clearInterval(interval);
        }
    }, []);

    return { bootLog, isBooted };
};
