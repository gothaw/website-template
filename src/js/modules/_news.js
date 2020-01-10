import $ from "../lib/jquery-3.4.1.js";

if (document.getElementById("news")) {
    (function () {

        // accordion variables
        const accordionTitles = document.querySelectorAll(".accordion__item-title");
        const accordionTexts = document.querySelectorAll(".accordion__item-text");

        // progress bars variables
        const progressBarsWrapper = document.querySelector(".side-bar__experience-wrapper");
        const progressBars = document.querySelectorAll(".progress-bar");

        // Experience bars values in years
        const progressBrasYears = [3, 6, 5, 2];

        /**
         * @name            showServicesItem
         * @desc            Expands services accordion in the side bar, when user click on the accordion title.
         *                  Uses slideUp and slideToggle jQuery animations.
         */
        const showServicesItem = () => {
            for (let title of accordionTitles) {
                title.addEventListener("click", function () {

                    const accordionItemText = title.closest(".accordion__item").querySelector(".accordion__item-text");

                    for (let text of accordionTexts) {
                        $(text).not(accordionItemText).slideUp();
                    }

                    $(accordionItemText).slideToggle();

                })
            }
        };

        /**
         * @name            animateExperienceBars
         * @desc            Function animates the experience bars in the side bar when bars are shown in the view port.
         *                  It uses values given in progressBrasYears array and edits the width property.
         */
        const animateExperienceBars = () => {
            setTimeout(function () {

                if (progressBarsWrapper.getBoundingClientRect().bottom < window.innerHeight) {

                    const maxExperience = Math.max.apply(Math, progressBrasYears);

                    for (let i = 0; i < progressBars.length; i++) {
                        progressBars[i].style.width = `${progressBrasYears[i] / maxExperience * 100}%`
                    }

                } else {
                    animateExperienceBars();
                }
            }, 200);
        };

        const init = () => {
            animateExperienceBars();
            showServicesItem();
        };

        window.addEventListener("load", init)

    })();
}
