let m;
function sidebarFade(){
    m = document.getElementById("main-body")
    m.style.opacity="0.5"
    m.style.transition = "0.2s";
    document.getElementById("overlay").style.display="flex"
}
function sidebarFadeAway(){
    m.style.opacity="1"
    document.getElementById("overlay").style.display="none"
}
