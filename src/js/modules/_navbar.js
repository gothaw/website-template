import enquire from "../lib/enquire.js"
import {breakpoints} from "../modules/_variables.js";

(function () {
    // variables
    const menuItem = document.querySelectorAll(".nav-item");
    const menuLogo = document.querySelector(".navbar__logo");
    // jQuery variables


    const moveLogoToggleMenu = () => {
        enquire.register(`screen and (max-width: ${breakpoints.tabletUpper}px)`,{
            match: function () {
                console.log("Hello it is a match");
            },
            unmatch: function () {
                console.log("Hello this does not match");
            }
        });
    };

    const addBackgroundColourNavBar = () => {
        enquire.register(`screen and (max-width: ${breakpoints.tabletUpper}px)`, {
            match: function () {
                console.log("Hello it is a match");
            },
            unmatch: function () {
                console.log("Hello this does not match");
            }
        });
    };

    const init = () => {
        addBackgroundColourNavBar();
    };

    window.addEventListener("load", init)
})();