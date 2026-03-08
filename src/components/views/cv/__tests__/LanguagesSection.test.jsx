import { describe, it, expect, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { renderWithTerminal } from '../../../../test/test-utils';
import { LanguagesSection } from '../LanguagesSection';

describe('LanguagesSection', () => {
    it('renders without crashing', () => {
        renderWithTerminal(<LanguagesSection isTyping={false} onComplete={vi.fn()} />);
    });

    it('displays the section title', async () => {
        const { container } = renderWithTerminal(
            <LanguagesSection isTyping={true} onComplete={vi.fn()} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            expect(container.textContent.replace(/\u00A0/g, ' ')).toMatch(/LANGUAGES\.CFG/i);
        });
    });

    it('renders Spanish as native language', async () => {
        const { container } = renderWithTerminal(
            <LanguagesSection isTyping={true} onComplete={vi.fn()} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            const text = container.textContent.replace(/\u00A0/g, ' ');
            expect(text).toMatch(/Español/i);
            expect(text).toMatch(/Nativo/i);
        });
    });

    it('renders English with B1 level', async () => {
        const { container } = renderWithTerminal(
            <LanguagesSection isTyping={true} onComplete={vi.fn()} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            const text = container.textContent.replace(/\u00A0/g, ' ');
            expect(text).toMatch(/Inglés/i);
            expect(text).toMatch(/B1 certificado/i);
        });
    });

    it('calls onComplete after all stages', async () => {
        const onComplete = vi.fn();
        renderWithTerminal(
            <LanguagesSection isTyping={true} onComplete={onComplete} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            expect(onComplete).toHaveBeenCalled();
        });
    });
});
