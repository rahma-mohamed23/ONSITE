import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>404 - Page Not Found</title>
            </Helmet>

            <div className="text-center mt-5 py-5">
                <h1 className="display-1 fw-bold">404</h1>
                <h2 className="mb-4">Page Not Found</h2>
                <p className="lead mb-4">
                    The page you're looking for doesn't exist.
                </p>
                <Link to="/" className="btn btn-primary">
                    Go Home
                </Link>
            </div>
        </>
    );
}