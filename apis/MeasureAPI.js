import axios from 'axios'


//POST request
export default axios.create({
    baseURL: 'https://quiet-coast-66040.herokuapp.com/'
})