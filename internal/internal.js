class internalObject{
    constructor(){
    };
    internalTest(){
        return('internalTest');
    }
    async getWeather(location,startDate,endDate){
        let KEY = 'PSEGYPSPDNJ2EUM3AMTFCUEWC';
        let response;
        if(startDate == null && endDate == null){
            response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${KEY}`);
        } else {
            response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${startDate}/${endDate}?key=${KEY}`);
        }
        const weatherData = await response.json();  
        console.log(weatherData);
    };
};

const internal = new internalObject();
export default internal;