import React from 'react'

const StudRegistration = () => {
  return (
    <div>
        <div
            style={{
                backgroundColor: "#F4F7F2",
                minHeight: "100vh"
            }}
        >
            <div className="container py-5">

                <div className="row justify-content-center">

                    <div className="col-12 col-md-10 col-lg-8">

                        <div className="card shadow border-0 rounded-4">

                            <div className="card-body p-5">

                                <div className="text-center mb-4">
                                    <h2
                                        className="fw-bold"
                                        style={{ color: "#2B5748" }}
                                    >
                                        Campus Placement Registration
                                    </h2>

                                    <p className="text-muted">
                                        Enter your personal and academic details
                                    </p>
                                </div>

                                <div className="row g-4">

                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-semibold">
                                            Registration Number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-semibold">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-semibold">
                                            Aadhar Number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-semibold">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-semibold">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-semibold">
                                            Branch / Department
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-semibold">
                                            SSLC Mark (%)
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-semibold">
                                            Plus Two Mark (%)
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-semibold">
                                            UG Degree Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-semibold">
                                            UG Mark (%)
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-semibold">
                                            PG Degree Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-semibold">
                                            PG Mark (%)
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="col-12 text-center mt-4">
                                        <button
                                            className="btn px-5 py-2 fw-bold"
                                            style={{
                                                backgroundColor: "#2B5748",
                                                color: "#FFFFFF",
                                                border: "none",
                                                borderRadius: "10px"
                                            }}
                                        >
                                            Submit
                                        </button>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default StudRegistration