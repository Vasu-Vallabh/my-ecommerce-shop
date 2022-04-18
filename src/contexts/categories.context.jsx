import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebaseConfig.component';

export const CategoriesContext = createContext( {
    categories: {},
});

export const ProductsProvider = ({children}) => {

    const [categories, setCategories] = useState({});
    const value = {categories}

    const getCategoryMap = async () => await getCategoriesAndDocuments();

    useEffect(()=>{
        getCategoryMap().then((categoriesMap)=>setCategories(categoriesMap));
    },[]);

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )

}
