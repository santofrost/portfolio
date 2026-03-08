import { describe, it, expect, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { renderWithTerminal } from '../../../../test/test-utils';
import { Typewriter } from '../Typewriter';

describe('Typewriter', () => {
    it('renders without crashing', () => {
        renderWithTerminal(<Typewriter text="Hello" isTyping={false} />);
    });

    it('splits text into individual character spans', async () => {
        const { container } = renderWithTerminal(
            <Typewriter text="AB" isTyping={true} />
        );
        // There should be a span for each character
        const charSpans = container.querySelectorAll('span > span');
        expect(charSpans.length).toBe(2);
    });

    it('replaces spaces with non-breaking spaces', () => {
        const { container } = renderWithTerminal(
            <Typewriter text="A B" isTyping={true} />
        );
        const spans = container.querySelectorAll('span > span');
        // The middle character (space) should be a non-breaking space
        expect(spans[1].textContent).toBe('\u00A0');
    });

    it('calls onComplete when fastForward is active', async () => {
        const onComplete = vi.fn();
        renderWithTerminal(
            <Typewriter text="test" isTyping={true} onComplete={onComplete} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            expect(onComplete).toHaveBeenCalled();
        });
    });

    it('does not call onComplete when isTyping is false', async () => {
        const onComplete = vi.fn();
        renderWithTerminal(
            <Typewriter text="test" isTyping={false} onComplete={onComplete} />,
            { isFastForward: true }
        );
        // Give it some time, should NOT call
        await new Promise((r) => setTimeout(r, 50));
        expect(onComplete).not.toHaveBeenCalled();
    });
});
