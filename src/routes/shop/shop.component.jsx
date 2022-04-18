import './shop.styles.scss';
import { Routes, Route} from "react-router-dom";
import CategoriesPreviewComponent from "../categories-preview/categories-preview.component";
import CategoryComponent from "../../components/category/category.component";


const ShopComponent = () => {
    return (
       <Routes>
           <Route index  element={<CategoriesPreviewComponent/>} />
           <Route path=":category"  element={<CategoryComponent/>} />
       </Routes>
    )
}

export default ShopComponent


