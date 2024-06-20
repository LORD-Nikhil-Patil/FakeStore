import { render, screen, fireEvent } from "@testing-library/react";
import MainLayout from "./index";
import { useProductList } from "./hooks";
import { ToastContainer } from 'react-toastify';
import { DropDownSelect } from "../../components/dropdown-select";
import { ProductList } from "../../components/productList";
import { Spinner } from "../../components/spinner";

import '@testing-library/jest-dom';

// Mock the useProductList hook
jest.mock("./hooks", () => ({
  useProductList: jest.fn()
}));

// Mock components
jest.mock('react-toastify', () => ({
  ToastContainer: jest.fn().mockImplementation(() => null)
}));

jest.mock("../../components/dropdown-select", () => ({
  DropDownSelect: jest.fn().mockImplementation(() => null)
}));

jest.mock("../../components/productList", () => ({
  ProductList: jest.fn().mockImplementation(() => null)
}));

jest.mock("../../components/spinner", () => ({
  Spinner: jest.fn().mockImplementation(() => null)
}));

describe("MainLayout", () => {
    const mockUseProductList = {
        products: [],
        searchedProduct: [],
        categorys: [],
        category: '',
        productsListLoading: false,
        sortProductList: jest.fn(),
        headleCateagrySelect: jest.fn(),
        handleProductDetail: jest.fn(),
        addToCart: jest.fn(),
        handlePagination: jest.fn()
    };

    beforeEach(() => {
        // Reset all mocks before each test
        jest.clearAllMocks();
        
        // Mock the useProductList implementation
        (useProductList as jest.Mock).mockReturnValue(mockUseProductList);
    });
 
    test("renders without crashing", () => {
        render(<MainLayout />);
    });

    test("renders the main layout with components", () => {
        render(<MainLayout />);

        // Check if sort button is rendered
        expect(screen.getByText("sort")).toBeInTheDocument();

        // Check if DropDownSelect component is rendered
        expect(DropDownSelect).toHaveBeenCalled();

        // Check if ProductList component is rendered
        expect(ProductList).toHaveBeenCalled();

        // Check if ToastContainer component is rendered
        expect(ToastContainer).toHaveBeenCalled();
    });

    test("handles sort button click", () => {
        render(<MainLayout />);

        const sortButton = screen.getByRole("sort");
        fireEvent.click(sortButton);

        expect(mockUseProductList.sortProductList).toHaveBeenCalled();
    });

    test("renders the spinner when productsListLoading is true", () => {
        (useProductList as jest.Mock).mockReturnValueOnce({
            ...mockUseProductList,
            productsListLoading: true
        });

        render(<MainLayout />);

        expect(Spinner).toHaveBeenCalled();
    });

    test("handles pagination click", () => {
        render(<MainLayout />);

        const paginationLinks = screen.getByRole("pagination");
        fireEvent.click(paginationLinks);
        expect(mockUseProductList.handlePagination).toHaveBeenCalled();
    });
});
