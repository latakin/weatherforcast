// Import our custom CSS
import '../scss/styles.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
import { getForecast, getImage } from './getdata';
import { udatePage } from './updateui';


const searchBtn = document.querySelector('#search');


document.addEventListener('DOMContentLoaded', async () => {
    await udatePage('newyork');
    const imageUrl = await getImage('newyork');
    document.body.style.backgroundImage = `url('${imageUrl}')`
    document.body.style.backgroundSize = 'cover';


})




//console.log(`${cityName}, whats going on`)
searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();
     const inp = document.getElementById("city");
     const cityName = inp.value;
    try {
        if(!cityName) {
            alert('enter a valid city')
        } 
        if (cityName){
             console.log(cityName);
            udatePage(cityName);
            const imageUrl = await getImage(cityName);
            document.body.style.backgroundImage = `url('${imageUrl}')`
            document.body.style.backgroundSize = 'cover'
            
        }
       
        console.log('button clicked')
       } catch (error) {
        console.error('data not found')
    }
    
}  );


