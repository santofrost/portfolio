import { render } from '@testing-library/react';
import { TerminalContext } from '../context/TerminalContext';

/**
 * Renders a component wrapped with TerminalContext.
 * @param {React.ReactElement} ui - Component to render
 * @param {object} options
 * @param {boolean} [options.isFastForward=true] - TerminalContext value
 */
import React from 'react';
import { vi } from 'vitest';

export function renderWithTerminal(ui: React.ReactElement, { isFastForward = true, ...renderOptions } = {}) {
    const setIsFastForward = vi.fn();
    return {
        ...render(
            <TerminalContext.Provider value={{ isFastForward, setIsFastForward }}>
                {ui}
            </TerminalContext.Provider>,
            renderOptions
        ),
        setIsFastForward,
    };
}
