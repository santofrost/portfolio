import { describe, it, expect, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { renderWithTerminal } from '../../../../test/test-utils';
import { HeroSection } from '../HeroSection';

describe('HeroSection', () => {
    it('renders without crashing', () => {
        renderWithTerminal(<HeroSection isTyping={false} onComplete={vi.fn()} />);
    });

    it('displays name and title when typing is active', async () => {
        const { container } = renderWithTerminal(
            <HeroSection isTyping={true} onComplete={vi.fn()} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            expect(container.textContent).toMatch(/VICENTE/i);
        });
    });

    it('renders contact information', async () => {
        const { container } = renderWithTerminal(
            <HeroSection isTyping={true} onComplete={vi.fn()} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            expect(container.textContent).toMatch(/santo.frost@gmail.com/i);
        });
    });

    it('renders LinkedIn link', async () => {
        const { container } = renderWithTerminal(
            <HeroSection isTyping={true} onComplete={vi.fn()} />,
            { isFastForward: true }
        );
        const linkedinLink = container.querySelector('a[href*="linkedin.com"]');
        expect(linkedinLink).toBeInTheDocument();
    });

    it('calls onComplete after all typing stages finish', async () => {
        const onComplete = vi.fn();
        renderWithTerminal(
            <HeroSection isTyping={true} onComplete={onComplete} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            expect(onComplete).toHaveBeenCalled();
        });
    });
});
