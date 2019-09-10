import enquire from "../lib/enquire.js"

(function () {


    const addBackgroundColourNavBar = () => {
        enquire.register('screen and (max-width: 991px)', {
            match: function () {
                console.log("Match");
            },
            unmatch: function () {
                console.log("Unmatch");
            }
        });
    };

    const init = () => {
        addBackgroundColourNavBar();
    };

    window.addEventListener('load',init)
})();