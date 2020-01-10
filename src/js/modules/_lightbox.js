import {getChildIndexInParent} from "../modules/_utilities.js";
import $ from "../lib/jquery-3.4.1.js";

if(document.getElementsByClassName("lightbox").length){
    (function () {
        // variables
        const lightbox = document.querySelector(".lightbox");
        const galleryItems = document.querySelectorAll(".gallery__item");
        const lightboxImageWrapper = document.querySelector(".lightbox__img-wrapper");
        const lightboxDescriptions = document.querySelectorAll(".lightbox__description");
        const lightboxArrowLeft = document.querySelector(".lightbox__arrow--left");
        const lightboxArrowRight = document.querySelector(".lightbox__arrow--right");

        // gallery item index of the project/image that is shown in the lightbox
        let lightboxIndex;

        /**
         * @name                setImageDescription
         * @param               index {int} index of the gallery Item
         * @desc                Sets the description of the lightbox project by adding --show class.
         */
        const setImageDescription = (index) => {
            for (let description of lightboxDescriptions) {
                description.classList.remove("lightbox__description--show");
            }
            lightboxDescriptions[index].classList.add("lightbox__description--show");
        };

        /**
         * @name                setMainLightBoxImage
         * @param               e {event} click event when user click on a gallery item
         * @param               index {int} index of the gallery Item
         * @desc                Function sets the main lightbox image. This is used when user clicks on a image in the gallery or changes the images using lightbox arrows.
         */
        const setMainLightBoxImage = (e = null, index = null) => {
            let targetGalleryItem;
            if (e) {
                const target = e.target;
                targetGalleryItem = target.closest(".gallery__item");
            } else if (!isNaN(index)) {
                targetGalleryItem = galleryItems[index].closest(".gallery__item");
            }
            // prepend the image
            if (e || !isNaN(index)) {
                const mainImage = targetGalleryItem.querySelector("picture");
                if (lightboxImageWrapper.children.length > 2) {
                    lightboxImageWrapper.removeChild(lightboxImageWrapper.firstChild);
                }
                lightboxImageWrapper.prepend(mainImage.cloneNode(true));
            }
        };

        /**
         * @name                showLightBox
         * @desc                Shows project lightbox using jQuery show method.
         */
        const showLightBox = () => {
            $(lightbox).show("swing");
        };

        /**
         * @name                hideLightBox
         * @desc                Hides project lightbox using jQuery slideUp method.
         *                      The lightbox is closed when user click outside lightbox image or description.
         */
        const hideLightBox = () => {
            lightboxImageWrapper.addEventListener("click", function (e) {
                e.stopPropagation();
            });
            for (let description of lightboxDescriptions) {
                description.addEventListener("click", function (e) {
                    e.stopPropagation();
                })
            }
            lightbox.addEventListener("click", function (e) {
                $(lightbox).slideUp("fast");
            })
        };

        /**
         * @name                bindLightboxArrows
         * @desc                Changes lightbox projects when user clicks on lightbox arrows.
         *                      It changes the lightBoxIndex and invokes setImageDescription and setMainLightBoxImage functions.
         */
        const bindLightboxArrows = () => {
            lightboxArrowLeft.addEventListener("click", function () {
                lightboxIndex === 0 ? lightboxIndex = galleryItems.length - 1 : lightboxIndex--;
                setImageDescription(lightboxIndex);
                setMainLightBoxImage(null, lightboxIndex);
            });
            lightboxArrowRight.addEventListener("click", function () {
                lightboxIndex === galleryItems.length - 1 ? lightboxIndex = 0 : lightboxIndex++;
                setImageDescription(lightboxIndex);
                setMainLightBoxImage(null, lightboxIndex);
            });
        };

        /**
         * @name                bindGalleryItems
         * @desc                Shows project lightbox when user clicks on the gallery images.
         *                      It invokes setImageDescription, setMainLightBoxImage and showLightBox functions
         */
        const bindGalleryItems = () => {
            for (let item of galleryItems) {
                item.addEventListener("click", function (e) {
                    lightboxIndex = getChildIndexInParent(item);
                    setMainLightBoxImage(e);
                    setImageDescription(lightboxIndex);
                    showLightBox();
                });
            }
        };

        const init = () => {
            bindGalleryItems();
            hideLightBox();
            bindLightboxArrows();
        };

        window.addEventListener("load", init);
    })();
}