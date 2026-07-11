import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewRegistration = () => {

    const [data, changeData] = useState([])
    const fetchData = () =>{
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(
        ()=>{
            fetchData()
        }
    )

  return (
    <div className="container py-5">

    <h2
        className="text-center fw-bold mb-5"
        style={{ color: "#2B5748" }}
    >
        Student Registration Details
    </h2>


    <div className="row g-4">

        {data.map(
            (value,index) =>{
                return(
                    <div
                    className="col-12 col-sm-6 col-md-4 col-lg-4"
                >

                    <div className="card h-100 shadow border-0 rounded-4">

                        <div className="card-body">

                            <h4
                                className="fw-bold text-center mb-3"
                                style={{ color: "#2B5748" }}
                            >
                                {value.fullName}
                            </h4>


                            <p className="card-text">

                                <strong>Registration No :</strong>
                                {" "}
                                {value.regNo}

                                <br />

                                <strong>Branch :</strong>
                                {" "}
                                {value.branch}

                                <br />

                                <strong>SSLC Mark :</strong>
                                {" "}
                                {value.sslcMark} %

                                <br />

                                <strong>Plus Two Mark :</strong>
                                {" "}
                                {value.plusTwoMark} %

                                <br />

                                <strong>UG Mark :</strong>
                                {" "}
                                {value.ugMark} %

                                <br />

                                <strong>PG Mark :</strong>
                                {" "}
                                {value.pgMark || "N/A"}

                                {value.pgMark && " %"}

                            </p>

                        </div>

                    </div>

                </div>
                )
            }
        )}
                


    </div>

</div>
  )
}

export default ViewRegistration