if (document.getElementById("news")) {
    (function () {

        const progressBarsWrapper = document.querySelector(".side-bar__experience-wrapper");
        const progressBars = document.querySelectorAll(".progress-bar");

        // Experience bars values in years
        const progressBrasYears = [3, 6, 5, 2];

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
        };

        window.addEventListener("load", init)

    })();
}
