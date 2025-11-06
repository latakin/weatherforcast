import { getForecast } from "./getdata";

export async function udatePage(city) { 
    
    const forecast = await getForecast(city);

    //populate Address Div
    const addressDiv = document.querySelector('#div1');
    
    const address = forecast.address;
    const tempInF = forecast.temp;
    const temp = Math.floor((tempInF - 32) * (5 / 9));
    addressDiv.innerHTML = `
                            <h1 class=" display-1 fw-bolder pt-3 text-start text-uppercase">${address}</h1>
                            <h3 style="font-size: 6rem;" class="me-4 text-end">${temp}&#8451</h3>
    `


    //populate description div
    const descriptionDiv = document.querySelector('#div2');
    const description = forecast.description;
    descriptionDiv.innerHTML = `
                            <p class="pe-2"><i class="bi bi-cloud-drizzle display-1 "></i>
                            <h3 class=" display-6">${description}</h3>
                            </p>
    `
    //populate day 1 of 5 days forecast
    const dayOneDiv = document.querySelector('#div3');
    const day1 = forecast.day1;
    const day1Temp = Math.floor((day1 - 32) * (5 / 9));
    dayOneDiv.innerHTML = `
                            <p ><i class="bi bi-cloud-drizzle display-1 "></i>
                            <h3 class="h3">${day1Temp}&#8451</h3>
                            <p class="fs-4 fw-bolder">Day 1</p>
                            </p>
                            
    `
    //populate day 2 of 5 days forecast
    const dayTwoDiv = document.querySelector('#div4');
    const day2 = forecast.day2;
    const day2Temp = Math.floor((day2 - 32) * (5 / 9));
    dayTwoDiv.innerHTML = `
                            <p><i class="bi bi-cloud-drizzle display-1 "></i>
                            <h3 class="h3">${day2Temp}&#8451</h3>
                            <p class="fs-4 fw-bolder">Day 2</p>
                            </p>
                            
    `
     //populate day 3 of 5 days forecast
    const dayThreeDiv = document.querySelector('#div5');
    const day3 = forecast.day3;
    const day3Temp = Math.floor((day3 - 32) * (5 / 9));
    dayThreeDiv.innerHTML = `
                            <p><i class="bi bi-cloud-drizzle display-1 "></i>
                            <h3 class="h3">${day3Temp}&#8451</h3>
                            <p class="fs-4 fw-bolder">Day 3</p>
                            </p>
                            
    `

     //populate day 4 of 5 days forecast
    const dayFourDiv = document.querySelector('#div6');
    const day4 = forecast.day4;
    const day4Temp = Math.floor((day4 - 32) * (5 / 9));
    dayFourDiv.innerHTML = `
                            <p><i class="bi bi-cloud-drizzle display-1 "></i>
                            <h3 class="h3">${day4Temp}&#8451</h3>
                            <p class="fs-4 fw-bolder">Day 4</p>
                            </p>
                            
    `
     //populate day 5 of 5 days forecast
    const dayFiveDiv = document.querySelector('#div7');
    const day5 = forecast.day5;
    const day5Temp = Math.floor((day5 - 32) * (5 / 9));
    dayFiveDiv.innerHTML = `
                            <p><i class="bi bi-cloud-drizzle display-1 "></i>
                            <h3 class="h3">${day5Temp}&#8451</h3>
                            <p class="fs-4 fw-bolder">Day 5</p>
                            </p>
                            
    `
    
}