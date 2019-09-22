import $ from "../lib/jquery-3.4.1.js"
import enquire from "../lib/enquire.js"
import {breakpoints} from "../modules/_variables.js";

(function () {
    // variables
    const menu = document.querySelector(".navbar__menu");
    const menuWrapper = document.querySelector(".navbar__menu-wrapper");
    const menuItems = document.querySelectorAll(".nav-item");
    const menuLogo = document.querySelector(".navbar__logo");
    const toggleButton = document.querySelector(".navbar-toggler[type=button][data-toggle]");
    // jQuery variables

    let toggleMenuActive = false;

    /**
     * @name        moveLogoToggleMenu
     * @desc        Function prepends logo image before menu links for mobile and tablet.
     *              For desktop, logo is appended after second menu link. Uses enquire.js.
     */
    const moveLogoToggleMenu = () => {
        enquire.register(`screen and (max-width: ${breakpoints.tabletUpper}px)`, {
            match: function () {
                $(menu).prepend($(menuLogo));
            },
            unmatch: function () {
                $(menuItems[1]).after($(menuLogo));
            }
        });
    };

    /**
     * @name        toggleMenuActive
     * @desc        Function toggles navigation menu when user clicks on toggle button. Media queries handled by css using @media.
     */
    const toggleNavigationMenu = () => {
        toggleButton.addEventListener("click", function () {
            menuWrapper.classList.toggle("navbar__menu-wrapper--toggle-active");
            toggleMenuActive = !toggleMenuActive;
        });
    };

    const init = () => {
        moveLogoToggleMenu();
        toggleNavigationMenu();
    };

    window.addEventListener("load", init)
})();