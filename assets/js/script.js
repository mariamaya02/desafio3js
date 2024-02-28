// function pintar(){
//     ele.style.backgroundColor = 'yellow'
//     }
//     const ele = document.getElementById("ele1")
//     ele.addEventListener("click", pintar);

    const pintar = (ele, color = "green") => (ele.style.backgroundColor = color);
        ele = document.getElementById("ele1");
        ele.addEventListener("click", () => {
            pintar(ele, "yellow");
    });

//   function changeColor(elementId, color = "black"){
//    blackColor = document.querySelector('#' + elementId)
//    blackColor.style.backgroundColor= color
//}
