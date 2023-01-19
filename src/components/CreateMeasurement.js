import { useNavigate } from "react-router-dom"
import {createMeasurement} from '../services/measurements-api'

function Create() {
    const nav = useNavigate()

    const createTheMeasurement = (e) => {
        const measurement = {description: e.target.description.value, complete: false}
        createMeasurement(measurement)
        nav('/')
    }

return(
    <div>
        <h4>Create A New Entry</h4>
        <form onSubmit={createTheMeasurement}>
            <input type='text' name='description' id='dsc'/>
            <input type='submit'/>
        </form>
    </div>
)
}

export default Create