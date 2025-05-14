
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Mock the dropdown components to simplify testing
jest.mock('@/components/ui/dropdown-menu', () => ({
  DropdownMenu: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  DropdownMenuTrigger: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="dropdown-trigger">{children}</div>
  ),
  DropdownMenuContent: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="dropdown-content">{children}</div>
  ),
  DropdownMenuItem: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe('Navbar Integration Tests - Working Cases', () => {
  const renderNavbar = () => {
    render(
      <MemoryRouter>
        <div style={{ pointerEvents: 'auto' }}>
          <Navbar />
        </div>
      </MemoryRouter>
    );
  };

  test('renders main navigation links', () => {
    renderNavbar();

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Digital Global Goods')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('has correct navigation links', () => {
    renderNavbar();

    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '/contact');
  });

  test('dropdown contains correct categories and items', async () => {
    renderNavbar();
    
    // Simulate dropdown open
    screen.getByTestId('dropdown-trigger'); // trigger exists

    // Check categories
    expect(screen.getByText('Financial')).toBeInTheDocument();
    expect(screen.getByText('Health')).toBeInTheDocument();
    expect(screen.getByText('Identity')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Governance')).toBeInTheDocument();

    // Check some sample items
    expect(screen.getByText('DigiLocker')).toBeInTheDocument();
    expect(screen.getByText('Aarogya Setu')).toBeInTheDocument();
    expect(screen.getByText('DIKSHA')).toBeInTheDocument();

    // Verify links
    expect(screen.getByText('DigiLocker').closest('a')).toHaveAttribute(
      'href',
      '/digital-goods/digilocker'
    );
  });
});
