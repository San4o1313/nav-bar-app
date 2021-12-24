const linksEl = document.querySelector(".links");
const containerEl = document.getElementById("container");
const menuEl = document.getElementById("menu");
const containerNavEl = document.getElementById("nav-container");

const linksCopyEl = linksEl.cloneNode(true);
linksCopyEl.classList.add ("bottom-menu");
linksCopyEl.classList.remove ("links");

containerEl.append(linksCopyEl);

let menuIsOpen  = false;
let hightNav = containerNavEl.clientHeight;
let hightCont = containerEl.clientHeight;

containerEl.style.height = hightNav+"px";
document.body.style.paddingTop = hightNav+"px"

menuEl.addEventListener("click", () => {
    if (!menuIsOpen) {
        containerEl.style.height = hightCont+"px";
        menuIsOpen = true;
        return;
    }
    containerEl.style.height = hightNav+"px";
    menuIsOpen = false;
});

window.addEventListener("resize", () => {
    if(document.body.clientWidth > 800) {
        containerEl.style.height = hightNav+"px";
        menuIsOpen = false;
    }
})