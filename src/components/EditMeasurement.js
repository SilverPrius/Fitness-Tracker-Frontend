import { getMeasurement, editMeasurement } from "../services/measurements-api"
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditMeasurement() {
    const { id } = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getMeasurement(id) // getting the measurement that matches this id
            .then(res => setData(res.data))
    }, [])

    const editTheMeasurement = e => {
        e.preventDefault()
        const updatedMeasurement = {
            date: e.target.date.value,
            weight: e.target.weight.value,
            bodyFat: e.target.bodyFat.value,
            bmi: e.target.bmi.value,
            neck: e.target.neck.value,
            acrossMidShoulder: e.target.acrossMidShoulder.value,
            upperChest: e.target.upperChest.value,
            bicep: e.target.bicep.value,
            forearm: e.target.forearm.value,
            rightWrist: e.target.rightWrist.value,
            leftWrist: e.target.leftWrist.value,
            upperStomach: e.target.upperStomach.value,
            bellyButton: e.target.bellyButton.value,
            waistLine: e.target.waistLine.value,
            hipButt: e.target.hipButt.value,
            upperThigh: e.target.upperThigh.value,
            midCalf: e.target.midCalf.value,
        }
        editMeasurement(id, updatedMeasurement)
        nav(`/${id}`)
    }
    return (
        <div>
            <h1>Editing</h1>
            <form className="edit-form" onSubmit={editTheMeasurement}>
                <div className="edit-buttons">
                    <input className="edit-button" type='submit' value='Submit' />
                    <button className="edit-button" onClick={() => { nav('/') }}>Main</button>
                </div>
                <div className="edits">Date:<input className="edits-input" type='text' name='date' defaultValue={data.date} /></div>
                <div className="edits">Weight:<input className="edits-input" type='number' name='weight' placeholder="lbs" defaultValue={data.weight} /></div>
                <div className="edits">Body Fat:<input className="edits-input" type='number' name='bodyFat' placeholder="%" defaultValue={data.bodyFat} /></div>
                <div className="edits">BMI:<input className="edits-input" type='number' name='bmi' placeholder="#" defaultValue={data.bmi} /></div>
                <div className="edits">Neck:<input className="edits-input" type='number' name='neck' placeholder="inches" defaultValue={data.neck} /></div>
                <div className="edits">Across Mid-Shoulders:<input className="edits-input" type='number' name='acrossMidShoulder' placeholder="inches" defaultValue={data.acrossMidShoulder} /></div>
                <div className="edits">Upper Chest:<input className="edits-input" type='number' name='upperChest' placeholder="inches" defaultValue={data.upperChest} /></div>
                <div className="edits">Bicep:<input className="edits-input" type='number' name='bicep' placeholder="inches" defaultValue={data.bicep} /></div>
                <div className="edits">Forearm:<input className="edits-input" type='number' name='forearm' placeholder="inches" defaultValue={data.forearm} /></div>
                <div className="edits">Right Wrist:<input className="edits-input" type='number' name='rightWrist' placeholder="inches" defaultValue={data.rightWrist} /></div>
                <div className="edits">Left Wrist:<input className="edits-input" type='number' name='leftWrist' placeholder="inches" defaultValue={data.leftWrist} /></div>
                <div className="edits">Upper Stomach:<input className="edits-input" type='number' name='upperStomach' placeholder="inches" defaultValue={data.upperStomach} /></div>
                <div className="edits">Belly Button:<input className="edits-input" type='number' name='bellyButton' placeholder="inches" defaultValue={data.bellyButton} /></div>
                <div className="edits">Waist Line:<input className="edits-input" type='number' name='waistLine' placeholder="inches" defaultValue={data.waistLine} /></div>
                <div className="edits">Hip/Butt:<input className="edits-input" type='number' name='hipButt' placeholder="inches" defaultValue={data.hipButt} /></div>
                <div className="edits">Upper Thigh:<input className="edits-input" type='number' name='upperThigh' placeholder="inches" defaultValue={data.upperThigh} /></div>
                <div className="edits">Mid-Calf:<input className="edits-input" type='number' name='midCalf' placeholder="inches" defaultValue={data.midCalf} /></div>
                <div className="edit-buttons">
                    <input className="edit-button" type='submit' value='Submit' />
                    <button className="edit-button" onClick={() => { nav('/') }}>Main</button>
                </div>
            </form>
        </div>
    )
}