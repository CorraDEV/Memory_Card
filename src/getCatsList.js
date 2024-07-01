export default async function getCatsList(){
    const apiKey = 'live_HTnQAmP1OeybekpSmZWEO4yz8H46CMQkrqK3py6AYLTOSDxJpXlXQI0HliwLFR1T';    
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=${apiKey}`);
    const data = await response.json();      
    return data;
}