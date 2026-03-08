import { describe, it, expect, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { renderWithTerminal } from '../../../../test/test-utils';
import { EducationSection } from '../EducationSection';

describe('EducationSection', () => {
    it('renders without crashing', () => {
        renderWithTerminal(<EducationSection isTyping={false} onComplete={vi.fn()} />);
    });

    it('displays the section title', async () => {
        const { container } = renderWithTerminal(
            <EducationSection isTyping={true} onComplete={vi.fn()} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            expect(container.textContent.replace(/\u00A0/g, ' ')).toMatch(/EDUCATION\.SYS/i);
        });
    });

    it('renders university degree entry', async () => {
        const { container } = renderWithTerminal(
            <EducationSection isTyping={true} onComplete={vi.fn()} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            expect(container.textContent.replace(/\u00A0/g, ' ')).toMatch(/Ingeniería Informática/i);
        });
    });

    it('renders all three education entries', async () => {
        const { container } = renderWithTerminal(
            <EducationSection isTyping={true} onComplete={vi.fn()} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            const text = container.textContent.replace(/\u00A0/g, ' ');
            expect(text).toMatch(/Ingeniería Informática/i);
            expect(text).toMatch(/Desarrollo de Aplicaciones/i);
            expect(text).toMatch(/Explotación de Sistemas/i);
        });
    });

    it('calls onComplete after all typing stages', async () => {
        const onComplete = vi.fn();
        renderWithTerminal(
            <EducationSection isTyping={true} onComplete={onComplete} />,
            { isFastForward: true }
        );
        await waitFor(() => {
            expect(onComplete).toHaveBeenCalled();
        });
    });
});
