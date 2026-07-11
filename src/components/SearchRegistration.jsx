import React from 'react'
import NavBar from './NavBar'

const SearchRegistration = () => {
  return (
    <div>
        <NavBar/>
        <div
            style={{
                backgroundColor: "#F4F7F2",
                minHeight: "100vh"
            }}
        >
            <div className="container py-5">

                <div className="row justify-content-center">

                    <div className="col-12 col-md-8 col-lg-6">

                        <div className="card shadow border-0 rounded-4">

                            <div className="card-body p-5">

                                <div className="text-center mb-4">
                                    <h2
                                        className="fw-bold"
                                        style={{ color: "#2B5748" }}
                                    >
                                        Search Student
                                    </h2>

                                    <p className="text-muted">
                                        Enter the Registration Number to search student details
                                    </p>
                                </div>

                                <div className="row g-4">

                                    <div className="col-12">
                                        <label className="form-label fw-semibold">
                                            Registration Number
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Registration Number"
                                        />
                                    </div>

                                    <div className="col-12 text-center">
                                        <button
                                            className="btn px-5 py-2 fw-bold"
                                            style={{
                                                backgroundColor: "#2B5748",
                                                color: "#FFFFFF",
                                                border: "none",
                                                borderRadius: "10px"
                                            }}
                                        >
                                            Search
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

export default SearchRegistration