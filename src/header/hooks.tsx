import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector, RootState } from "../../store";
import { Item } from "../../src/mainLayout/types";
import productSlice from "../../src/mainLayout/reducer";

export const useHeader = ()=>{
    const navigate = useNavigate();

    const { filterData } = productSlice.actions;
    const products: Item[] = useAppSelector((state: RootState) => state.productList.productList.data);
    const dispatch = useAppDispatch(); 

    const handleProductSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchResults = products.filter(item => item.category.toLowerCase().includes(e.target.value) || item.title.toLowerCase().includes(e.target.value))
      dispatch(filterData(searchResults))
    }

    const goToCart = () => {
      navigate("cart")
    }
    return{
      handleProductSearch,
      goToCart
    }
}