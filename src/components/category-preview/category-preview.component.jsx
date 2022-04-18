import ProductCardComponent from "../product-card/product-card.component";
import {Link} from "react-router-dom";
import './category-preview.styles.scss'

const CategoryPreviewComponent = ({name, products}) => {
    return (
        <div className="category-container">
            <h2>
                <Link className='nav-link' to={`/shop/${name}`}>
                    <span className="title" >{name.toUpperCase()}</span>
                </Link>
            </h2>
            <div className="preview">
                {
                    products
                        .filter((_,idx) => idx < 4)
                        .map((product) => <ProductCardComponent key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}

export default CategoryPreviewComponent
