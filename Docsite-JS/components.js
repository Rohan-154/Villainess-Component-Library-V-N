const topBar = document.querySelector(".sidebar-doc");
const btnToggleTop = document.querySelector("#btn-toggle-top");
const closeBtn = document.querySelector(".btn-res-close");
btnToggleTop.addEventListener('click', () => {
    topBar.classList.add('active-top')
  })
  closeBtn.addEventListener("click", ()=>{
    topBar.classList.remove('active-top');
  })