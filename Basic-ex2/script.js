let randomTemp = Math.random()*45-5;
const heading = document.querySelector(".heading");
const info = document.querySelector(".info");
const image = document.querySelector(".foto");

heading.innerHTML = `The temperature is ${randomTemp.toFixed(2)} degrees!`;


if (randomTemp <11){
    info.innerHTML = "The weather is cold";
    image.src = "images/cold.jpg";
}else if(randomTemp >32){
    info.innerHTML = "The weather is hot";
    image.src = "images/hot.jpg";
}
else{
    info.innerHTML = "The weather is moderate";
    image.src = "images/moderate.jpg";
};
