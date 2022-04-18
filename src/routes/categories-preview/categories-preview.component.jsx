import CategoryPreviewComponent from "../../components/category-preview/category-preview.component";
import {CategoriesContext} from "../../contexts/categories.context";
import {useContext} from "react";

const CategoriesPreviewComponent = () => {
    const {categories} = useContext(CategoriesContext);
    return  <>
        {
            Object.keys(categories)?.map((category) =>
                {
                    const Products = categories[category];
                    return (
                        <CategoryPreviewComponent key={category} name={category} products={[...Products]} />
                    )
                }
            )
        }
    </>
};

export default CategoriesPreviewComponent
