import { describe, it, expect, vi } from 'vitest';
import { waitFor } from '@testing-library/react';
import { renderWithTerminal } from '../../../../test/test-utils';
import { ObjectiveSection } from '../ObjectiveSection';

describe('ObjectiveSection', () => {
    it('renders without crashing', () => {
        renderWithTerminal(<ObjectiveSection isTyping={false} onComplete={vi.fn()} />);
    });

    it('displays the section title', async () => {
        const { container } = renderWithTerminal(
            <ObjectiveSection isTyping={true} onComplete={vi.fn()} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            expect(container.textContent.replace(/\u00A0/g, ' ')).toMatch(/OBJETIVO DEL SISTEMA/i);
        });
    });

    it('renders the objective text', async () => {
        const { container } = renderWithTerminal(
            <ObjectiveSection isTyping={true} onComplete={vi.fn()} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            expect(container.textContent.replace(/\u00A0/g, ' ')).toMatch(/proyectos tecnológicos/i);
        });
    });

    it('calls onComplete after all typing stages', async () => {
        const onComplete = vi.fn();
        renderWithTerminal(
            <ObjectiveSection isTyping={true} onComplete={onComplete} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            expect(onComplete).toHaveBeenCalled();
        });
    });
});
