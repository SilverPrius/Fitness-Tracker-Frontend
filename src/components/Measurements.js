import { getMeasurements } from "../services/measurements-api"
import { useState, useEffect } from 'react'
import Create from "./CreateMeasurement"
import { Link } from "react-router-dom"


export default function Measurements() {
    const [measurements, setMeasurements] = useState([])
    useEffect(() => {
        getMeasurements() // calling the function to get the data
            .then(res => setMeasurements(res.data)) // setting state with returned data
    }, [])
    console.log(measurements)
    return (
        <div className="main">
            <div className="main-menu">
                <Create />
            </div>
            <div className="measurements-container">
                {measurements.map((measurement) => {
                    return (
                        // <a href={`/${measurement._id}`} style={{ textDecoration: 'none' }}>
                        <div>
                            <Link to={`/${measurement._id}`} style={{ textDecoration: 'none' }}>
                                <div className="each-measurement">
                                    <div className="dates">
                                        <h3>{measurement.date}</h3>
                                    </div>
                                    <div>
                                        <h5 className="weights">Weight</h5>
                                        <h5>{measurement.weight}</h5>
                                    </div>
                                    <div>
                                        <h5>Body Fat</h5>
                                        <h5>{measurement.bodyFat}</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}