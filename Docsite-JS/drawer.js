const button = document.querySelector(".btnDrawer");
const sidebar = document.querySelector(".DsideBar");
const mainBody = document.querySelector(".Dmain-body-content");
sidebar.style.display = "none";
mainBody.style.width = "100%";

function drawerHandlerFunction() {
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
    mainBody.style.width = "100%";
  }
}
button.addEventListener("click", drawerHandlerFunction);