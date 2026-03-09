import { describe, it, expect, vi } from 'vitest';
import { waitFor } from '@testing-library/react';
import { renderWithTerminal } from '../../../../test/test-utils';
import { AdditionalSkillsSection } from '../AdditionalSkillsSection';

describe('AdditionalSkillsSection', () => {
    it('renders without crashing', () => {
        renderWithTerminal(<AdditionalSkillsSection isTyping={false} onComplete={vi.fn()} />);
    });

    it('displays the section title', async () => {
        const { container } = renderWithTerminal(
            <AdditionalSkillsSection isTyping={true} onComplete={vi.fn()} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            expect(container.textContent.replace(/\u00A0/g, ' ')).toMatch(/ADDITIONAL_SKILLS\.DAT/i);
        });
    });

    it('renders soft skills items', async () => {
        const { container } = renderWithTerminal(
            <AdditionalSkillsSection isTyping={true} onComplete={vi.fn()} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            const text = container.textContent.replace(/\u00A0/g, ' ');
            expect(text).toMatch(/Comunicación/i);
            expect(text).toMatch(/Liderazgo técnico/i);
        });
    });

    it('renders agile methodology item', async () => {
        const { container } = renderWithTerminal(
            <AdditionalSkillsSection isTyping={true} onComplete={vi.fn()} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            expect(container.textContent.replace(/\u00A0/g, ' ')).toMatch(/Scrum/i);
        });
    });

    it('calls onComplete after all stages', async () => {
        const onComplete = vi.fn();
        renderWithTerminal(
            <AdditionalSkillsSection isTyping={true} onComplete={onComplete} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            expect(onComplete).toHaveBeenCalled();
        });
    });
});
