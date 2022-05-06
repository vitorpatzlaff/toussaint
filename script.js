let info = document.getElementsByClassName("img");

for (let each of info){
    each.addEventListener("mouseenter", show);
    each.addEventListener("mouseleave", hide);
}

function show() {
    this.children[0].style = "background-color: #99000089";
    this.children[0].children[0].style = "color: #FFFFFFFF;";
}

function hide() {
    this.children[0].style = "background-color: #99000000";
    this.children[0].children[0].style = "color: #FFFFFF00;";
}
