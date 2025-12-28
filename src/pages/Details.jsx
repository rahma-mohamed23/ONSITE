import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import ClipLoader from 'react-spinners/ClipLoader';

export default function Details() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProduct = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to load product details'
                });
            } finally {
                setLoading(false);
            }
        };

        getProduct();
    }, [id]);

    const addToCart = () => {
        Swal.fire({
            icon: 'success',
            title: 'Added to Cart!',
            text: `${product.title} has been added successfully.`,
            confirmButtonColor: '#0d6efd'
        });
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                <ClipLoader color="#0d6efd" size={60} />
            </div>
        );
    }

    if (!product) {
        return <div className="text-center mt-5">Product not found</div>;
    }

    return (
        <>
            <Helmet>
                <title>{product.title} - FakeStore</title>
                <meta name="description" content={product.description} />
            </Helmet>

            <Link to="/products" className="btn btn-outline-secondary mb-4">
                ← Back to Products
            </Link>

            <div className="card mb-3 p-3 shadow">
                <div className="row g-4">
                    <div className="col-md-5 text-center">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="img-fluid"
                            style={{ maxHeight: '400px', objectFit: 'contain' }}
                        />
                    </div>
                    <div className="col-md-7">
                        <h2 className="fw-bold mb-3">{product.title}</h2>
                        <p className="text-muted text-uppercase">{product.category}</p>
                        <h3 className="text-primary fw-bold mb-3">${product.price}</h3>
                        <p className="text-secondary mb-4">{product.description}</p>
                        <div className="mb-3">
                            <span className="badge bg-warning text-dark me-2">
                                ⭐ {product.rating?.rate || 'N/A'}
                            </span>
                            <span className="text-muted">
                                ({product.rating?.count || 0} reviews)
                            </span>
                        </div>
                        <button onClick={addToCart} className="btn btn-primary btn-lg">
                            🛒 Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}