// All of our endpoints
import axios from 'axios'

const baseURL = 'http://localhost:3001/measurements'

// Show all
export const getMeasurements = () => {
    const URL = baseURL // our base url
    const response = axios.get(URL) // using axios's get functionality to grab our Measurements
    return response
}
// Show one
export const getMeasurement = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}
// Edit the Measurement
export const editMeasurement = (id, updatedMeasurement) => {
const URL = `${baseURL}/${id}`
const response = axios.put(URL, updatedMeasurement)
return response
}
// Create the Measurement
export const createMeasurement = (measurement) => {
    const URL = baseURL
    const response = axios.post(URL, measurement)
    return response
}
// Delete the Measurement
export const deleteToDo =(id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}