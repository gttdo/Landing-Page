let sidebarBtn = document.querySelector(".logo-btn")
let sidebar = document.querySelector("#sidebar")

const showSidebar = () => {
    sidebar.classList.toggle("active");
}
sidebarBtn.addEventListener("click", () => {
    console.log("connected!");
    showSidebar();
})