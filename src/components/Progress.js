import { useNavigate } from 'react-router-dom'

export default function Progress() {
    const nav = useNavigate()

    return (
        <div className='progress-container'>
            <div className='progress-menu'>
                <button className="edit-button" onClick={() => { nav('/') }}>Main</button>
            </div>
            <div className='progress-links'>
                <a> Links to different body parts</a>
            </div>
        </div>

    )
}


