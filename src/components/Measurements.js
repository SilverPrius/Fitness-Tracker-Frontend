import { getMeasurements } from "../services/measurements-api"
import { useState, useEffect } from 'react'
import Create from "./CreateMeasurement"
import Progress from "./Progress"

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
                        <a href={`/${measurement._id}`} style={{ textDecoration: 'none' }}>
                            <div className="each-measurement">
                                <h2>{measurement.date}</h2>
                                <h2>Weight{measurement.weight}</h2>
                                <h2> Body Fat{measurement.bodyFat}</h2>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}