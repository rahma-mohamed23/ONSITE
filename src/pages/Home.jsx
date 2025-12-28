import { Helmet } from 'react-helmet';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home - FakeStore</title>
                <meta name="description" content="Welcome to FakeStore - Your online shopping destination" />
            </Helmet>

            <div className="text-center py-5">
                <h1 className="display-4 fw-bold mb-4">Welcome to FakeStore</h1>
                <p className="lead text-muted mb-4">
                    Discover amazing products at great prices
                </p>
                <a href="/products" className="btn btn-primary btn-lg">
                    Shop Now
                </a>
            </div>
        </>
    );
}