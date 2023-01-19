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
        <div>
            <ul>
                {measurements.map((measurement) => {
                    return (
                        <li>
                            <a href={`/${measurement._id}`}>              
                            </a>
                        </li>
                    )
                })}
            </ul>
            <Create />
        </div>
    )
}