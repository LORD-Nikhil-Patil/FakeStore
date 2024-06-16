import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './index';
import { useHeader } from './hooks';

// Mock the useHeader hook
jest.mock('./hooks', () => ({
  useHeader: jest.fn(),
}));

describe('Header Component', () => {
  test('renders Header component', () => {
    const mockHandleProductSearch = jest.fn();
    const mockGoToCart = jest.fn();

    useHeader.mockReturnValue({
      handleProductSearch: mockHandleProductSearch,
      goToCart: mockGoToCart,
    });

    render(<Header />);

    // Check if the header is rendered
    expect(screen.getByText(/Fake Store/i)).toBeInTheDocument();

    // Check if the cart button is rendered
    expect(screen.getByRole('navigation', { name: /cart/i })).toBeInTheDocument();

    // Simulate clicking the cart button
    fireEvent.click(screen.getByRole('navigation', { name: /cart/i }));
    expect(mockGoToCart).toHaveBeenCalled();

    // Simulate typing in the search input
    const searchInput = screen.getByPlaceholderText(/Search/i);
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(mockHandleProductSearch).toHaveBeenCalledWith(expect.objectContaining({ target: expect.objectContaining({ value: 'test' }) }));
  });
});
