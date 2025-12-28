import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Thank you for contacting us! We will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <div className="container py-5">
            <h2 className="mb-4 text-center fw-bold">Contact Us</h2>
            <p className="text-center text-muted mb-5">
                Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <div className="row">
                {/* Contact Information */}
                <div className="col-lg-5 mb-4">
                    <div className="card shadow-sm h-100">
                        <div className="card-body p-4">
                            <h4 className="card-title fw-bold mb-4">Get in Touch</h4>
                            <p className="lead">We'd love to hear from you!</p>

                            <div className="mt-4">
                                <div className="mb-4">
                                    <h6 className="text-primary fw-bold mb-2">📧 Email</h6>
                                    <p className="mb-1">info@storeapp.com</p>
                                    <p className="text-muted small mb-0">support@storeapp.com</p>
                                </div>

                                <div className="mb-4">
                                    <h6 className="text-primary fw-bold mb-2">📞 Phone</h6>
                                    <p className="mb-1">+1 234 567 8900</p>
                                    <p className="text-muted small mb-0">+1 234 567 8901 (Support)</p>
                                </div>

                                <div className="mb-4">
                                    <h6 className="text-primary fw-bold mb-2">📍 Address</h6>
                                    <p className="mb-1">123 Store Street</p>
                                    <p className="mb-1">City, State 12345</p>
                                    <p className="text-muted small mb-0">Country</p>
                                </div>

                                <div className="mb-4">
                                    <h6 className="text-primary fw-bold mb-2">🕒 Working Hours</h6>
                                    <p className="mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p className="mb-1">Saturday: 10:00 AM - 4:00 PM</p>
                                    <p className="text-muted small mb-0">Sunday: Closed</p>
                                </div>
                            </div>

                            <div className="mt-4 pt-3 border-top">
                                <h6 className="fw-bold mb-3">Follow Us</h6>
                                <div className="d-flex gap-2 flex-wrap">
                                    <button className="btn btn-outline-primary btn-sm">Facebook</button>
                                    <button className="btn btn-outline-primary btn-sm">Twitter</button>
                                    <button className="btn btn-outline-primary btn-sm">Instagram</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="col-lg-7">
                    <div className="card shadow-sm">
                        <div className="card-body p-4">
                            <h4 className="card-title fw-bold mb-4">Send us a Message</h4>

                            <div onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label fw-semibold">
                                        Your Name <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-semibold">
                                        Your Email <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label fw-semibold">
                                        Your Message <span className="text-danger">*</span>
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="6"
                                        placeholder="Write your message here..."
                                        required
                                    ></textarea>
                                </div>

                                <div className="mb-3">
                                    <small className="text-muted">
                                        <span className="text-danger">*</span> Required fields
                                    </small>
                                </div>

                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg w-100"
                                    onClick={handleSubmit}
                                >
                                    Send Message
                                </button>
                            </div>

                            <div className="mt-4 p-3 bg-light rounded">
                                <small className="text-muted">
                                    <strong>Note:</strong> We typically respond within 24 hours during business days.
                                    For urgent matters, please call us directly.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact