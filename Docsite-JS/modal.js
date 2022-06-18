document.getElementById("open-popup-btn").addEventListener("click",function(){
    document.getElementById("open-popup-btn").style.display = "none";
    document.getElementsByClassName("popup")[0].classList.add("activeModal");
  });
   
  document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
    document.getElementById("open-popup-btn").style.display = "block";
    document.getElementsByClassName("popup")[0].classList.remove("activeModal");
  });