import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('Test render', () => {
        renderWithTranslation(<Sidebar />);
        // @ts-ignore
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test toggle', () => {
        renderWithTranslation(<Sidebar />);
        // @ts-ignore
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        // @ts-ignore
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        // @ts-ignore
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
