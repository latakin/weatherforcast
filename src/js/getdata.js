export async function getForecast(city) {
    try {
        const response =  await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=X767BPGD8A2SG4XPBX7TU9SYA`);
        const data = await response.json();
        const address = data.address;
        const description = data.description;
        const temp = data.days[0].temp;
        const day1 = data.days[1].temp;
        const day2 = data.days[2].temp
        const day3 = data.days[3].temp
        const day4 = data.days[4].temp
        const day5 = data.days[5].temp
        console.log(`${address}, ${description}, ${temp}`);
        return { address, description, temp, day1, day2, day3, day4, day5};
    } catch (error) {
        console.error('data not found');
    }
    
    
}

export async function getImage(city) {
    const unsplashAccessKey = 'KVLFg-cWeXe1L4al_tdN5efR2gcmvJGksMByesxRoms';
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${city}&per_page=1&client_id=${unsplashAccessKey}`)

        const data = await response.json();
        const imgSrc = data.results[0].urls.regular;
        return imgSrc;
    } catch (error) {
        console.error('data not found');
        
    }
    
}