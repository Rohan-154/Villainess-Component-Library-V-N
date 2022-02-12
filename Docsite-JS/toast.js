const toastSample = document.querySelector("#toast-sample-success");
const btnShowToast = document.querySelector("#show-toast-sample");
const btnCloseToast = document.querySelector("#btn-close-toast");

toastSample.style.display = "none";

let autoCloseToast;
btnShowToast.addEventListener("click", () => {
  toastSample.style.display = "block";
  autoCloseToast = setTimeout(() => {
    toastSample.style.display = "none";
  }, 2000);
});
btnCloseToast.addEventListener("click", () => {
  // clearTimeout(autoCloseToast);
  toastSample.style.display = "none";
});