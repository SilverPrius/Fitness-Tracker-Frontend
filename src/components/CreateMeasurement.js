import { useNavigate } from "react-router-dom"
import {createMeasurement} from '../services/measurements-api'

function Create() {
    const nav = useNavigate()

    const createTheMeasurement = (e) => {
        const measurement = {date: e.target.date.value, complete: false}
        createMeasurement(measurement)
        nav('/')
    }

return(
    <div className="create-container">
        <h3>Create A New Entry</h3>
        <form onSubmit={createTheMeasurement}>
            <input type='text' name='date' id='date'/>
            <input type='submit'/>
        </form>
    </div>
)
}

export default Create