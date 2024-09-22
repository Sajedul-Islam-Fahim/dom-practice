function calculateTraingle(){
    let base = getInputFieldValue('triangle-base');
    let height =  getInputFieldValue('triangle-height');
    let area = (base * height) / 2;
    setValue('triangle-area',area);

}

function calculateRectangle(){
    let length = getInputFieldValue('rectangle-length');
    let width = getInputFieldValue('rectangle-width');
    let  area = length * width;
    setValue('rectangle-area',area);

}

function calculateParallelogram(){
    let base = getInputFieldValue('parallelogram-base');
    let height =  getInputFieldValue('parallelogram-height');
    let area =  base * height;
    setValue('parallelogram-area',area);
}

function getInputFieldValue(inputFieldId){
    let inputField = document.getElementById(inputFieldId);
    let  value = parseFloat(inputField.value);
    return value;

}

function setValue(fieldId, value){
    let element = document.getElementById(fieldId);
    element.innerText = value;
}