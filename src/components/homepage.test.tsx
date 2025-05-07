import { render, screen } from '@testing-library/react';
import Header from './Header';
import Footer from './Footer';
import { MemoryRouter } from 'react-router-dom';

test('renders the homepage with header and footer', () => {
  render(
    <MemoryRouter>
      <Header />
      <Footer />
    </MemoryRouter>
  );

  // 1. Check if the header is rendered correctly
  const headerText = screen.getAllByText((_, element) =>
    element?.textContent === 'India Digital Vision'
  )[0]; // Pick the first match
  expect(headerText).toBeInTheDocument();

  const indiaText = screen.getByText('India');
  expect(indiaText).toHaveClass('text-theme-orange');

  // 2. Check if the footer is rendered correctly
  const footerHeader = screen.getByText('India Digital Vision');
  expect(footerHeader).toBeInTheDocument();

  const homeLink = screen.getByText('Home');
  expect(homeLink).toBeInTheDocument();

  const aboutLink = screen.getByText('About');
  expect(aboutLink).toBeInTheDocument();

  
});
