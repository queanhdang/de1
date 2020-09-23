// Login & register
var loginAndRegister = document.getElementsByClassName("login__form");
var login = document.getElementsByClassName("login__form-login");
var register = document.getElementsByClassName("login__form-register");
register[0].onclick= function() {
    loginAndRegister[0].style.display="none";
    loginAndRegister[1].style.display="block";
    return false;
}
login[1].onclick= function() {
    loginAndRegister[1].style.display="none";
    loginAndRegister[0].style.display="block";
    return false;
}
// Load blog
var blogpath="./assets/images/";
var blogs=  [[blogpath+"post1.png", blogpath+"post3.png", blogpath+"post1.png"],
            [blogpath+"post1.png", blogpath+"post2.png", blogpath+"post3.png"],
            [blogpath+"post3.png", blogpath+"post1.png", blogpath+"post2.png"]];
var load=document.getElementsByClassName("blog__load-item");
function clearActiveLoad() {
    for(let i=0; i<load.length; i++) {
        load[i].classList.remove("blog__load-item--active");
    }
}
for(let i=0; i<load.length; i++) {
    load[i].onclick = function() {
        clearActiveLoad();
        load[i].classList.add("blog__load-item--active");
        var imgs=document.getElementsByClassName("blog__item-img");
        for(let j=0; j<imgs.length; j++) {
            imgs[j].src=blogs[i][j];
        }
    }
}