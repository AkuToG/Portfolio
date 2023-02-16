let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");

openBtn.onclick = openNav;

function openNav() {
    sidenav.classList.add("active");
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("openBtn").style.width = "10%";

}

function closeMNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("closeBtn").remove("active");
}