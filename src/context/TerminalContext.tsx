import { createContext, useContext, Dispatch, SetStateAction } from 'react';

export interface ITerminalContext {
    isFastForward: boolean;
    setIsFastForward: Dispatch<SetStateAction<boolean>>;
}

export const TerminalContext = createContext<ITerminalContext>({
    isFastForward: false,
    setIsFastForward: () => { },
});

export const useTerminal = () => useContext(TerminalContext);
