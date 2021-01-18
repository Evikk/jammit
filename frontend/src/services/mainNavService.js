
export const mainNavService = {
    navPos
}
var prevScrollpos = window.pageYOffset;
function navPos() {
    
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector('.navbar').style.top = "0";
            document.querySelector('.navbar').style.backgroundColor ="transparent";
            
        }else {
            document.querySelector('.navbar').style.top = "-50px";
            document.querySelector('.navbar').style.backgroundColor ="#ffffff";
        }
        prevScrollpos = currentScrollPos;
    }
}
