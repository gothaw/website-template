import $ from "../lib/jquery-3.4.1.js"
import enquire from "../lib/enquire.js"
import {breakpoints} from "../modules/_variables.js";

(function () {
    // variables
    const navBar = document.querySelector(".navbar");
    const menu = document.querySelector(".navbar__menu");
    const menuWrapper = document.querySelector(".navbar__menu-wrapper");
    const menuItems = document.querySelectorAll(".nav-item");
    const menuLogo = document.querySelector(".navbar__logo");
    const toggleButton = document.querySelector(".navbar-toggler[type=button][data-toggle]");
    const toggleIcon = document.querySelector(".navbar__toggle-icon");
    const headerBanner = document.querySelector(".header");

    let toggleMenuActive = false;

    /**
     * @name            moveLogoToggleMenu
     * @desc            Function prepends logo image before menu links for mobile and tablet.
     *                  For desktop, logo is appended after second menu link. Uses enquire.js.
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
     * @name            toggleMenuActive
     * @desc            Function toggles navigation menu when user clicks on toggle button. Media queries handled by css using @media.
     *                  Changes the toggleIcon between hamburger and close icon (using fontawesome classes).
     */
    const toggleNavigationMenu = () => {
        toggleButton.addEventListener("click", function () {
            menuWrapper.classList.toggle("navbar__menu-wrapper--toggle-active");
            toggleMenuActive = !toggleMenuActive;
            if (toggleMenuActive) {
                toggleIcon.classList.remove("fa-bars");
                toggleIcon.classList.add("fa-times");
            } else {
                toggleIcon.classList.add("fa-bars");
                toggleIcon.classList.remove("fa-times");
            }
        });
    };

    /**
     * @name        toggleMenuBackgroundColor
     * @desc        Function toggles background color for the navigation bar if user scrolls below the banner of the website.
     */
    const toggleMenuBackgroundColor = () => {
        enquire.register(`screen and (min-width: ${breakpoints.desktopLower}px)`, {
            match: function () {
                setTimeout(function () {
                    let scrollTop = $(window).scrollTop();
                    if (scrollTop > headerBanner.offsetHeight - navBar.offsetHeight) {
                        navBar.classList.add("navbar--bg-color");
                    } else {
                        navBar.classList.remove("navbar--bg-color");
                    }
                    toggleMenuBackgroundColor();
                }, 100);
            }
        });
    };

    const init = () => {
        moveLogoToggleMenu();
        toggleNavigationMenu();
        toggleMenuBackgroundColor()
    };

    window.addEventListener("load", init)
})();