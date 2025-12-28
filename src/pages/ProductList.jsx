import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import { Helmet } from 'react-helmet';
import ClipLoader from 'react-spinners/ClipLoader';

export default function ProductList() {
    const { products, categories, loading, getAllProducts, getProductsByCategory } =
        useContext(ProductContext);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                <ClipLoader color="#0d6efd" size={60} />
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>Products - FakeStore</title>
                <meta name="description" content="Browse our collection of products" />
            </Helmet>

            <div className="mb-4">
                <button
                    className="btn btn-outline-primary me-2 mb-2"
                    onClick={getAllProducts}
                >
                    All Products
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className="btn btn-outline-secondary me-2 mb-2"
                        onClick={() => getProductsByCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="row">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}