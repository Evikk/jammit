
export const mainNavService = {
    navPos
}
var prevScrollpos = window.pageYOffset;
function navPos() {
    
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        
        if (prevScrollpos > currentScrollPos && currentScrollPos > 0) {
            if ( document.querySelector('.navbar')) {
                document.querySelector('.navbar').style.top = "0";
                document.querySelector('.navbar').style.backgroundColor ="#ffffff";
            }
    
        } 
        else if (currentScrollPos === 0) {
            document.querySelector('.navbar').style.top = "0";
            document.querySelector('.navbar').style.backgroundColor ="transparent";
        }
        else {
            document.querySelector('.navbar').style.top = "-70px";
            document.querySelector('.navbar').style.backgroundColor ="#ffffff";
        }
        prevScrollpos = currentScrollPos;
    }
}
