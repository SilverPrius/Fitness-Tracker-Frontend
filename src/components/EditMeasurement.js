import { getMeasurement, editMeasurement } from "../services/measurements-api"
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

export default function EditMeasurement(){
    const {id} = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getMeasurement(id) // getting the measurement that matches this id
        .then(res => setData(res.data))
    }, [])

    const editTheMeasurement = e => {
        e.preventDefault()
        const updatedMeasurement = {description: e.target.description.value, complete: e.target.complete.checked}
        editMeasurement(id, updatedMeasurement)
        nav(`/${id}`)
    }
  return (
    <div>
        <form onSubmit={editTheMeasurement}>
            Description:<input type='text' name='description' defaultValue={data.description}/>
            Body Fat %:<input type='number' name='bodyFat' defaultValue={data.bodyFat}/>
            BMI:<input type='number' name='bmi' defaultValue={data.bmi}/>
            Neck:<input type='number' name='neck' defaultValue={data.neck}/>
            Across Mid-Shoulder:<input type='number' name='acrossMidShoulder' defaultValue={data.acrossMidShoulder}/>
            Upper Chest:<input type='number' name='upperChest' defaultValue={data.upperChest}/>
            Bicep:<input type='number' name='bicep' defaultValue={data.bicep}/>
            Forearm:<input type='number' name='forearm' defaultValue={data.forearm}/>
            Right Wrist:<input type='number' name='rightWrist' defaultValue={data.rightWrist}/>
            Left Wrist:<input type='number' name='leftWrist' defaultValue={data.leftWrist}/>
            Upper Stomach:<input type='number' name='upperStomach' defaultValue={data.upperStomach}/>
            Belly Button:<input type='number' name='bellyButton' defaultValue={data.bellyButton}/>
            Waist Line:<input type='number' name='waistLine' defaultValue={data.waistLine}/>
            Hip/Butt:<input type='number' name='hipButt' defaultValue={data.hipButt}/>
            Upper Thigh:<input type='number' name='upperThigh' defaultValue={data.upperThigh}/>
            Mid-Calf:<input type='number' name='midCalf' defaultValue={data.midCalf}/>
            <input type='submit' />
            <button onClick={() => {nav('/')}}>Main</button>
        </form>
    </div>
  )
}