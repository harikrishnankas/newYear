var fruit = new Object();
const imgLen = 106
for (let i = 1; i< imgLen;i++){
  if (i<10){
    fruit[i] = "images/ezgif-frame-00"+i+".jpg";
  }else if (i<100){
    fruit[i] = "images/ezgif-frame-0"+i+".jpg";
  }else{
    fruit[i] = "images/ezgif-frame-"+i+".jpg";
  }
}

var fruitImages = new Array();
for(var i = 1; i < imgLen; i++) {
  var img = new Image();
  img.src = fruit[i];
  fruitImages[i] = img;
}

function trackScrollPosition() {
  const y = window.scrollY;
  const label = Math.min(Math.floor(y/10)+1, imgLen-1);
  console.log(label)
  const imageToUse = fruitImages[label];
  // Change the background image
  document.querySelector(".image-container").style.backgroundImage = "url("+imageToUse.src+")";
}


document.addEventListener("DOMContentLoaded", () => {
  addEventListener("scroll", (event) => {trackScrollPosition();});
});