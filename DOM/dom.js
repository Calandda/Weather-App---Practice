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
        //console.log(data.currentConditions.conditions);
        //this.createMainDisplay();
        this.createElementsDisplay(data);
    }
    createElementsDisplay(data){
        const body = document.querySelector('.divData');
        const sectionMain = document.createElement('section');
        sectionMain.classList.add('sectionMain');

        

        const sectionLocation = document.createElement('section');
        const imgLocation =document.createElement('img');
        const pLocation = document.createElement('p');
        imgLocation.src = './DOM/images/location.svg';
        pLocation.textContent = data.resolvedAddress;
        sectionLocation.classList.add('sectionData');
        imgLocation.classList.add('imgData');
        sectionLocation.appendChild(imgLocation);
        sectionLocation.appendChild(pLocation);

        const sectionTime = document.createElement('section');
        const imgTime = document.createElement('img');
        const pTime = document.createElement('p');
        imgTime.src = './DOM/images/time.svg';
        pTime.textContent = data.currentConditions.datetime;
        sectionTime.classList.add('sectionData');

        
        sectionMain.appendChild(sectionLocation);
        sectionMain.appendChild(sectionTime);
        body.appendChild(sectionMain);
    }
};

export default domObject;