class domObject{
    constructor(internalObject){
        const formInput = document.querySelector('.formInput');
        formInput.addEventListener('submit',(e)=>{
            e.preventDefault();
            let formData = new FormData(formInput);
            console.log(internalObject.getWeather(formData.get('inputLocation'),null,null).currentConditions);
        });
    };
    test(){
        return('domTest');
    };
};

export default domObject;