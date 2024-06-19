// src/hooks/__tests__/useHeader.test.tsx
import {act, ReactNode} from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useHeader } from './hooks';
import { useNavigate } from 'react-router-dom';
import { Item } from '../mainLayout/types';
import productSlice, {filterDataAction, productsInitialState} from "../mainLayout/reducer"
import  store from "../../store"
import { Provider } from 'react-redux';

// Mock useNavigate and the dispatch function
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));


const mockNavigate = useNavigate as jest.Mock;

function wrapper({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

describe('useHeader', () => {

  it('should filter products correctly', () => {
    const mockProducts: Item[] = [
      {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
      {
        id: 2,
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        price: 22.3,
        description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        rating: {
          rate: 4.1,
          count: 259,
        },
      },
    ];
    const productList = {
        data: [],
        error: null,
        searchData: [
            {
                category: "men's clothing",
                description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                id: 1,
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                price: 109.95,
                rating: {
                    count: 120,
                    rate: 3.9
                },
                title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
            }
        ],
        status: false
    };
    const { result } = renderHook(() => useHeader(),{wrapper});
   
    act(() => {
      result.current.handleProductSearch({
        target: { value: 'Slim' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    // const {wrapp} = renderWithProviders() 
    expect(productSlice.reducer(productsInitialState, filterDataAction([mockProducts[0]]))).toEqual({productList})
  });

  it('should navigate to cart', () => {
    const navigateMock = jest.fn();
    mockNavigate.mockReturnValue(navigateMock);

    const { result } = renderHook(() => useHeader(), {wrapper});

      result.current.goToCart();


    expect(navigateMock).toHaveBeenCalledWith('cart');
  });
});
