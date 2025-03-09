class domObject{
    constructor(internalObject){
        const formInput = document.querySelector('.formInput');
        let weatherCondition;
        formInput.addEventListener('submit',(e)=>{
            e.preventDefault();
            let formData = new FormData(formInput);
            this.getData(internalObject,formData);
        });
    };
    test(){
        return('domTest');
    };
    getData(object,formData){
        const response = object.getWeather(formData.get('inputLocation'),null,null)
            .then(response =>{
                let data = {};
                for (let [key,pair] of Object.entries(response)){
                    data[key] = pair;
                }
                this.removeHeader();
                console.log(data);
                this.convertData(data);
                this.displayWeatherData(data);
            });
    }
    removeHeader(){
        const logo = document.querySelector('.logo');
        logo.style.display = 'none';
    }
    convertData(data){
        this.weatherCondition = data;
    };
    displayWeatherData(data){
        console.log(data.currentConditions.conditions);
    }
};

export default domObject;