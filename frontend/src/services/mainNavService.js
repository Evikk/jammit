
export const mainNavService = {
    setHomePageNavStyle,
    setNavStyle
}

var prevScrollpos = window.pageYOffset;

function setHomePageNavStyle() {

        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;

            if (prevScrollpos > currentScrollPos && currentScrollPos > 0) {
                document.querySelector('.navbar').style.top = "0";
                document.querySelector('.navbar').style.backgroundColor = "#ffffff";
            }
            else if (currentScrollPos === 0) {
                document.querySelector('.navbar').style.top = "0";
                document.querySelector('.navbar').style.backgroundColor = "transparent";

            } else {
                document.querySelector('.navbar').style.top = "-82px";
                document.querySelector('.navbar').style.backgroundColor = "#ffffff";
            }
            prevScrollpos = currentScrollPos;
        }

  
}

function setNavStyle() {

        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;

            if (prevScrollpos > currentScrollPos ) {
                document.querySelector('.navbar').style.top = "0";
                document.querySelector('.navbar').style.backgroundColor = "#ffffff";
            } else {
                document.querySelector('.navbar').style.top = "-82px";
                document.querySelector('.navbar').style.backgroundColor = "#ffffff";
            }
            prevScrollpos = currentScrollPos;
        }

  
}






