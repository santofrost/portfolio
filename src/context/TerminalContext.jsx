import { createContext, useContext } from 'react';

export const TerminalContext = createContext({
    isFastForward: false,
    setFastForward: () => { },
});

export const useTerminal = () => useContext(TerminalContext);
