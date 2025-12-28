import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
                <img
                    src={product.image}
                    className="card-img-top p-3"
                    alt={product.title}
                    style={{ height: '250px', objectFit: 'contain' }}
                />
                <div className="card-body d-flex flex-column">
                    <Link
                        to={`/product/${product.id}`}
                        className="text-decoration-none text-dark"
                    >
                        <h5 className="card-title">{product.title}</h5>
                    </Link>
                    <p className="card-text text-truncate text-muted">
                        {product.description}
                    </p>
                    <div className="mt-auto">
                        <p className="card-text fw-bold text-primary fs-5">
                            ${product.price}
                        </p>
                        <Link
                            to={`/product/${product.id}`}
                            className="btn btn-outline-primary w-100"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}