import axios from 'axios';

export function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    const url = "https://icanhazdadjoke.com";
    axios.get(url, config).then((res) => {
        document.getElementById('joke').innerHTML = res.data.joke
    })
}