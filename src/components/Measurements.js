import { getMeasurements } from "../services/measurements-api"
import { useState, useEffect } from 'react'
import Create from "./CreateMeasurement"


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
            <a className="progress-button" href='http://localhost:3000/progress'>Progress</a>
                <Create />
            </div>
            <div className="measurements-container">
                {measurements.map((measurement) => {
                    return (
                        <a href={`/${measurement._id}`} style={{ textDecoration: 'none' }}>
                            <div className="each-measurement">
                                <div className="dates">
                                    <h3>{measurement.date}</h3>
                                </div>
                                <div>
                                    <h4 className="weights">Weight</h4>
                                    <h4>{measurement.weight}</h4>
                                </div>
                                <div>
                                    <h4>Body Fat</h4>
                                    <h4>{measurement.bodyFat}</h4>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}