import { useParams} from "react-router-dom";
import {CategoriesContext} from "../../contexts/categories.context";
import {useContext, useEffect, useState} from "react";
import ProductCardComponent from "../product-card/product-card.component";
import './category.styles.scss'

const CategoryComponent = () => {
	const {category} = useParams()
	const {categories} = useContext(CategoriesContext);
	const [products, setProducts] = useState([])

	useEffect(()=>{
		setProducts(categories[category]);
	},[category, categories])

	return (
		<div className="category-preview-container">
			<h2 className="title">{category.toUpperCase()}</h2>
			<div className="products">
				{
					products?.map((product) => <ProductCardComponent key = {product.id} product={product}/>)
				}
			</div>
		</div>
	)

	// return products?.map((product) => <ProductCardComponent key = {product.id} product={product}/>)

}

export default CategoryComponent
