import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders India Digital Vision header with correct styles', () => {
  render(<Header />);

  // Use getAllByText to handle multiple matches and select the right one
  const headerText = screen.getAllByText((_, element) =>
    element?.textContent === 'India Digital Vision'
  )[0]; // Pick the first match

  expect(headerText).toBeInTheDocument();

  // Check if "India" part has the correct class
  const indiaText = screen.getByText('India');
  expect(indiaText).toHaveClass('text-theme-orange');
});
