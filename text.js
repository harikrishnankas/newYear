async function reveal() {
    var reveals = document.querySelectorAll(".container",".reveal");
    for (var i = 1; i < reveals.length; i++) {
      var prev = reveals[i-1].getBoundingClientRect().top;
      if (prev < 100) {
        reveals[i].classList.add("active");
        if (i===2){
            var span = document.querySelectorAll("span");
            console.log(span);
            for (let i =0;i<span.length;i++){
                await new Promise(r => setTimeout(r, 1000));
                span[i].classList.add("ready")
            }
        }
      } else {
        reveals[i].classList.remove("active");
        if (i===2){
            var span = document.querySelectorAll("span");
            console.log(span);
            for (let i =0;i<span.length;i++){
                span[i].classList.remove("ready")
            }
        }
      }
    }
  }
  
  addEventListener("scroll", reveal);
  