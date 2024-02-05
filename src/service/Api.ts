import axios from 'axios';
export default () => {
    return axios.create({
        baseURL:'https://jsonplaceholder.typicode.com/'
    })
}

///Creation of FakeAPI call