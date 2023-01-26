import { useState, useEffect } from "react"
import { getMeasurement, deleteToDo } from "../services/measurements-api"
import { useParams, useNavigate } from 'react-router-dom'

export default function Measurement() {
    const nav = useNavigate() // setting up our return to main page
    const { id } = useParams() // destructuring the id parameter for use
    const [measurement, setMeasurement] = useState({}) // setting up our state
    useEffect(() => {
        getMeasurement(id) //getting the one ToDo from the api using the id
            .then(res => setMeasurement(res.data))
    }, [])

    const deleteTheMeasurement = () => {
        deleteToDo(id) // delete function goes here
        nav('/') // navigate back to the main screen
    }

    return (
        <div className="measurement-container">
            <div class="btn-group">
                <button className="measurement-buttons" onClick={() => { nav(`/${id}/edit`) }}>Edit</button>
                <button className="measurement-buttons" onClick={deleteTheMeasurement}>Delete</button>
                <button className="measurement-buttons" onClick={() => { nav('/') }}>Main</button>
            </div>
            <div className="results">
                <h4 className="result">Date <h4>{measurement.date}</h4></h4>
                <h4 className="result">Weight <h4>{measurement.weight} lbs</h4></h4>
                <h4 className="result">Body Fat <h4>{measurement.bodyFat} %</h4></h4>
                <h4 className="result">BMI <h4>{measurement.bmi}</h4></h4>
                <h4 className="result">Neck <h4>{measurement.neck} inches</h4></h4>
                <h4 className="result">Across Mid-Shoulders <h4>{measurement.acrossMidShoulder} inches</h4></h4>
                <h4 className="result">Upper Chest <h4>{measurement.upperChest} inches</h4></h4>
                <h4 className="result">Bicep <h4>{measurement.bicep} inches</h4></h4>
                <h4 className="result">Forearm <h4>{measurement.forearm} inches</h4></h4>
                <h4 className="result">Right Wrist <h4>{measurement.rightWrist} inches</h4></h4>
                <h4 className="result">Left Wrist <h4>{measurement.leftWrist} inches</h4></h4>
                <h4 className="result">Upper Stomach <h4>{measurement.upperStomach} inches</h4></h4>
                <h4 className="result">Belly Button <h4>{measurement.bellyButton} inches</h4></h4>
                <h4 className="result">Waist Line <h4>{measurement.waistLine} inches</h4></h4>
                <h4 className="result">Hip/Butt <h4>{measurement.hipButt} inches</h4></h4>
                <h4 className="result">Upper Thigh <h4>{measurement.upperThigh} inches</h4></h4>
                <h4 className="result">Mid Calf <h4>{measurement.midCalf} inches</h4></h4>
            </div>
            <div class="btn-group">
                <button className="measurement-buttons" onClick={() => { nav(`/${id}/edit`) }}>Edit</button>
                <button className="measurement-buttons" onClick={deleteTheMeasurement}>Delete</button>
                <button className="measurement-buttons" onClick={() => { nav('/') }}>Main</button>
            </div>
        </div>
    )
}