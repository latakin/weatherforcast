// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
import { getForecast, getImage } from './getdata';


const searchBtn = document.querySelector('#search');


document.addEventListener('DOMContentLoaded', async () => {
    const imageUrl = await getImage('newyork');
    document.body.style.backgroundImage = `url('${imageUrl}')`
    document.body.style.backgroundSize = 'cover';


})




//console.log(`${cityName}, whats going on`)
searchBtn.addEventListener('click', async () => {
    const inp = document.getElementById("city");
    const cityName = inp.value;
    console.log(cityName);
    getForecast(cityName);
    const imageUrl = await getImage(cityName);
    document.body.style.backgroundImage = `url('${imageUrl}')`
    document.body.style.backgroundSize = 'cover'
}  );


