import { renderHook, act } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// import { toast } from 'react-toastify';
import {createStore} from "../../store";
import { useProductList } from './hooks';
import { sortProductListAction } from './actions';

jest.mock('react-toastify', () => ({
    toast: {
        error: jest.fn(),
    },
}));

jest.mock('./actions', () => ({
    fetchProductListAction: jest.fn(),
    sortProductListAction: jest.fn(),
    searchByCategoryAction: jest.fn(),
}));

const wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={createStore()}>
        <Router>{children}</Router>
    </Provider>
);

describe('useProductList', () => {
    // it('should fetch product list on mount', async () => {
    //     renderHook(() => useProductList(), { wrapper });
    //     expect(fetchProductListAction).toHaveBeenCalled();
    // });

    it('should sort product list correctly', async () => {
        const { result } = renderHook(() => useProductList(), { wrapper });

        act(() => {
            result.current.sortProductList();
        });

        expect(sortProductListAction).toHaveBeenCalledWith({ sort: '' });
        expect(result.current.sort).toBe('');

        act(() => {
            result.current.sortProductList();
        });

        expect(sortProductListAction).toHaveBeenCalledWith({ sort: 'desc' });
        expect(result.current.sort).toBe('desc');
    });

    // it('should handle category selection correctly', async () => {
    //     const { result } = renderHook(() => useProductList(), { wrapper });

    //     act(() => {
    //         result.current.headleCateagrySelect('electronics');
    //     });

    //     expect(result.current.category).toBe('electronics');
    //     expect(searchByCategoryAction).toHaveBeenCalledWith({ category: 'electronics', sort: 'desc' });

    //     act(() => {
    //         result.current.headleCateagrySelect('select');
    //     });

    //     expect(result.current.category).toBe('select');
    //     expect(sortProductListAction).toHaveBeenCalledWith({ sort: 'desc' });
    // });

    // it('should navigate to product detail page', async () => {
    //     const { result } = renderHook(() => useProductList(), { wrapper });
    //     const navigateSpy = jest.spyOn(require('react-router-dom'), 'useNavigate');

    //     act(() => {
    //         result.current.handleProductDetail(1);
    //     });

    //     expect(navigateSpy).toHaveBeenCalledWith('product/1');
    // });

    // it('should add product to cart', async () => {
    //     const { result } = renderHook(() => useProductList(), { wrapper });

    //     const product = {
    //         id: 1,
    //         title: 'Test Product',
    //         price: 100,
    //         description: 'Test Description',
    //         category: 'Test Category',
    //         image: 'test-image.jpg',
    //         rating: {
    //           rate: 4.5,
    //           count: 10,
    //         },
    //         quantity: 1
    //       };
    //     const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    //     act(() => {
    //         result.current.addToCart(product);
    //     });

    //     expect(setItemSpy).toHaveBeenCalledWith('products', JSON.stringify([{ ...product, quantity: 1 }]));
    // });

    // it('should handle pagination error', async () => {
    //     const { result } = renderHook(() => useProductList(), { wrapper });

    //     act(() => {
    //         result.current.handlePagination();
    //     });

    //     expect(toast.error).toHaveBeenCalledWith("Pagination API not available", { position: "top-center" });
    // });
});
