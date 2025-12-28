import React from 'react'

const About = () => {
    return (
        <div className="container py-5">
            <h2 className="mb-4 text-center fw-bold">About Us - FakeStore   </h2>

            <div className="row">
                <div className="col-lg-8">
                    <p className="lead text-center mb-5">
                        We are a leading online store providing quality products to customers worldwide.
                    </p>

                    <div className="card shadow-sm mb-4">
                        <div className="card-body p-4">
                            <h4 className="card-title fw-bold mb-3">Our Mission</h4>
                            <p className="card-text">
                                Our mission is to deliver the best shopping experience with competitive prices
                                and excellent customer service. We strive to make online shopping convenient,
                                safe, and enjoyable for everyone.
                            </p>
                        </div>
                    </div>

                    <div className="card shadow-sm mb-4">
                        <div className="card-body p-4">
                            <h4 className="card-title fw-bold mb-3">Our Story</h4>
                            <p className="card-text">
                                Founded in 2024, our store has grown to become one of the most trusted
                                e-commerce platforms. We partner with top brands and manufacturers to bring
                                you authentic products at the best prices. Our commitment to quality and
                                customer satisfaction has made us a preferred choice for online shoppers.
                            </p>
                        </div>
                    </div>

                    <div className="card shadow-sm mb-4">
                        <div className="card-body p-4">
                            <h4 className="card-title fw-bold mb-3">Our Values</h4>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border-0">✅ Customer satisfaction is our priority</li>
                                <li className="list-group-item border-0">✅ Quality products at competitive prices</li>
                                <li className="list-group-item border-0">✅ Fast and reliable shipping</li>
                                <li className="list-group-item border-0">✅ Secure payment methods</li>
                                <li className="list-group-item border-0">✅ Excellent customer support 24/7</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card bg-primary text-white shadow mb-4">
                        <div className="card-body p-4">
                            <h5 className="card-title fw-bold">Why Choose Us?</h5>
                            <ul className="list-unstyled mt-3 mb-0">
                                <li className="mb-2">✓ 1000+ Products</li>
                                <li className="mb-2">✓ Worldwide Shipping</li>
                                <li className="mb-2">✓ 24/7 Support</li>
                                <li className="mb-2">✓ Secure Payments</li>
                                <li className="mb-2">✓ Easy Returns</li>
                                <li className="mb-0">✓ Best Prices</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card bg-light shadow-sm">
                        <div className="card-body text-center p-4">
                            <h5 className="card-title fw-bold mb-3">Our Stats</h5>
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <h3 className="text-primary mb-1 fw-bold">10K+</h3>
                                    <small className="text-muted">Happy Customers</small>
                                </div>
                                <div className="col-6 mb-3">
                                    <h3 className="text-primary mb-1 fw-bold">1000+</h3>
                                    <small className="text-muted">Products</small>
                                </div>
                                <div className="col-6">
                                    <h3 className="text-primary mb-1 fw-bold">50+</h3>
                                    <small className="text-muted">Countries</small>
                                </div>
                                <div className="col-6">
                                    <h3 className="text-primary mb-1 fw-bold">4.8★</h3>
                                    <small className="text-muted">Rating</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About