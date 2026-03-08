import { describe, it, expect, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { renderWithTerminal } from '../../../../test/test-utils';
import { ExperienceSection } from '../ExperienceSection';

describe('ExperienceSection', () => {
    it('renders without crashing', () => {
        renderWithTerminal(<ExperienceSection isTyping={false} onComplete={vi.fn()} />);
    });

    it('displays the section title', async () => {
        const { container } = renderWithTerminal(
            <ExperienceSection isTyping={true} onComplete={vi.fn()} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            expect(container.textContent).toMatch(/EXPERIENCE\.LOG/i);
        });
    });

    it('renders Capgemini experience entry', async () => {
        const { container } = renderWithTerminal(
            <ExperienceSection isTyping={true} onComplete={vi.fn()} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            expect(container.textContent).toMatch(/CAPGEMINI/i);
        });
    });

    it('renders all six experience entries', async () => {
        const { container } = renderWithTerminal(
            <ExperienceSection isTyping={true} onComplete={vi.fn()} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            const timelineDots = container.querySelectorAll('.absolute.w-4.h-4');
            expect(timelineDots.length).toBe(6);
        });
    });

    it('calls onComplete after all typing stages', async () => {
        const onComplete = vi.fn();
        renderWithTerminal(
            <ExperienceSection isTyping={true} onComplete={onComplete} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            expect(onComplete).toHaveBeenCalled();
        }, { timeout: 4000 });
    });
});
