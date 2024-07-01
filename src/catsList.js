async function getCatsList(){
    const apiKey = 'live_HTnQAmP1OeybekpSmZWEO4yz8H46CMQkrqK3py6AYLTOSDxJpXlXQI0HliwLFR1T';
    
    return fetch(`https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.error(err));
}

const catsList = await getCatsList();
export default catsList;