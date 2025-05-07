import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { MemoryRouter } from 'react-router-dom';

test('renders India Digital Vision footer with correct elements', () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

  // 1. Check if the India Digital Vision header is rendered
  const footerHeader = screen.getByText('India Digital Vision');
  expect(footerHeader).toBeInTheDocument();

  // 2. Check if the footer links are rendered
  const homeLink = screen.getByText('Home');
  expect(homeLink).toBeInTheDocument();

  const aboutLink = screen.getByText('About');
  expect(aboutLink).toBeInTheDocument();

  // Add more assertions as needed
}); 