class internalObject{
    constructor(){
    };
    test(){
        return('internalTest');
    }
    async getWeather(location,startDate,endDate){
        let KEY = 'PSEGYPSPDNJ2EUM3AMTFCUEWC';
        let response;
        try{
            
            response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${KEY}`);
            
            const weatherData = await response.json();  
            //console.log(weatherData.currentConditions);
            return(weatherData);
        } catch(err){
            console.log('err');
        }
    };
};

export default internalObject;