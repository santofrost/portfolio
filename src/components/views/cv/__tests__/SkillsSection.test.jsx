import { describe, it, expect, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { renderWithTerminal } from '../../../../test/test-utils';
import { SkillsSection } from '../SkillsSection';

describe('SkillsSection', () => {
    it('renders without crashing', () => {
        renderWithTerminal(<SkillsSection isTyping={false} onComplete={vi.fn()} />);
    });

    it('displays the section title', async () => {
        const { container } = renderWithTerminal(
            <SkillsSection isTyping={true} onComplete={vi.fn()} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            expect(container.textContent).toMatch(/COMPETENCIAS_CLAVE\.DAT/i);
        });
    });

    it('renders three skill categories', async () => {
        const { container } = renderWithTerminal(
            <SkillsSection isTyping={true} onComplete={vi.fn()} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            expect(container.textContent).toMatch(/Frontend/i);
            expect(container.textContent).toMatch(/Backend/i);
            expect(container.textContent).toMatch(/Arquitectura/i);
        });
    });

    it('lists frontend technologies', async () => {
        const { container } = renderWithTerminal(
            <SkillsSection isTyping={true} onComplete={vi.fn()} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            expect(container.textContent).toMatch(/Vue\.js/i);
            expect(container.textContent).toMatch(/React/i);
            expect(container.textContent).toMatch(/JavaScript/i);
        });
    });

    it('calls onComplete after all skills are typed', async () => {
        const onComplete = vi.fn();
        renderWithTerminal(
            <SkillsSection isTyping={true} onComplete={onComplete} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            expect(onComplete).toHaveBeenCalled();
        });
    });
});
