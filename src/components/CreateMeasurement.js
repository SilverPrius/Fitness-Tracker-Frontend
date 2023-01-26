import { useNavigate } from "react-router-dom"
import {createMeasurement} from '../services/measurements-api'

function Create() {
    const nav = useNavigate()

    const createTheMeasurement = (e) => {
        e.preventDefault()
        const measurement = {date: e.target.date.value, complete: false}
        createMeasurement(measurement).then(res=>{
            nav(0)
        
        })
    }

return(
    <div className="create-container">
        <h2>Create A New Entry</h2>
        <form onSubmit={createTheMeasurement}>
            <input type='text' name='date' id='date'/>
            <input className="create-submit-button" type='submit'/>
        </form>
    </div>
)
}

export default Create