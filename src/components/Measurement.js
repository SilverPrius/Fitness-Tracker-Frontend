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
        <div>
            <h1>Measurement:</h1>
            <h3>{measurement.description}</h3>
            <button onClick={() => {nav(`/${id}/edit`)}}>Edit</button> 
            <button onClick={deleteTheMeasurement}>Delete</button>
            <button onClick={() => {nav('/')}}>Main</button> 
        </div>
    )
}