import { useState, useEffect } from "react"
import { getMeasurement, deleteToDo } from "../services/measurements-api"
import {useParams, useNavigate} from 'react-router-dom'

export default function Measurement() {
    const nav = useNavigate() // setting up our return to main page
    const {id} = useParams() // destructuring the id parameter for use
    const [measurement, setMeasurement] = useState({}) // setting up our state
    useEffect(() => {
        getMeasurement(id) //getting the one ToDo from the api using the id
        .then(res => setMeasurement(res.data))}, [])

    const deleteTheMeasurement = () => {
        deleteToDo(id) // delete function goes here
        nav('/') // navigate back to the main screen
    }

    return(
        <div className="measurement-container">
            <div className="results">
            <h1>{measurement.date}</h1>
            <h3>Weight {measurement.weight}</h3>
            <h3>Body Fat % {measurement.bodyFat}</h3>
            <h3>BMI {measurement.bmi}</h3>
            <h3>Neck {measurement.neck}</h3>
            <h3>Across Mid-Shoulder {measurement.acrossMidShoulder}</h3>
            <h3>Upper Chest {measurement.upperChest}</h3>
            <h3>Bicep {measurement.bicep}</h3>
            <h3>Forearm {measurement.forearm}</h3>
            <h3>Right Wrist {measurement.rightWrist}</h3>
            <h3>Left Wrist {measurement.leftWrist}</h3>
            <h3>Upper Stomach {measurement.upperStomach}</h3>
            <h3>Belly Button {measurement.bellyButton}</h3>
            <h3>Waist Line {measurement.waistLine}</h3>
            <h3>Hip/Butt {measurement.hipButt}</h3>
            <h3>Upper Thigh {measurement.upperThigh}</h3>
            <h3>Mid Calf {measurement.midCalf}</h3>
            </div>
            <div class="btn-group">
            <button onClick={() => {nav(`/${id}/edit`)}}>Edit</button> 
            <button onClick={deleteTheMeasurement}>Delete</button>
            <button onClick={() => {nav('/')}}>Main</button> 
            </div>
        </div>
    )
}