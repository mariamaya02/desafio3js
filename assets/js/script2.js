//requerimiento 4.1
const ele1 = document.getElementById('color-1');
const ele2 = document.getElementById('color-2');
const ele3 = document.getElementById('color-3');
const ele4 = document.getElementById('color-4');

const changeColor = (e) => {
    e.target.style.backgroundColor = 'black';
}
ele1.addEventListener('click', changeColor);
ele2.addEventListener('click', changeColor);
ele3.addEventListener('click', changeColor);
ele4.addEventListener('click', changeColor);
//requerimiento 4.2
const div = document.getElementById('key');
//requerimiento 4.3
const newDiv = (color) => {
    const addNewDiv = document.createElement('div');
    addNewDiv.style.width = '200px';
    addNewDiv.style.height = '200px';
    addNewDiv.style.backgroundColor = color;
    addNewDiv.style.borderRadius = '10%';
    addNewDiv.style.margin = '5%';
    addNewDiv.style.marginLeft = '43%';
    document.body.appendChild(addNewDiv);
}
//requerimiento 4.2 y 4.3
document.addEventListener('keydown', function (e) {
    if (e.key === 'a') {
        div.style.backgroundColor = 'pink';
    } else if (e.key === 's') {
        div.style.backgroundColor = 'orange';
    } else if (e.key === 'd') {
        div.style.backgroundColor = 'lightblue';
    } else if (e.key === 'q') {
        newDiv('purple');
    } else if (e.key === 'w') {
        newDiv('gray');
    } else if (e.key === 'e') {
        newDiv('brown');
    } else {
        div.style.backgroundColor = "";
    }
})



