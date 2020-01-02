/**
 * @name        getChildIndexInParent
 * @param       element
 * @desc        Function gets index of the element with respect to its parent.
 * @returns     {int}
 */
export const getChildIndexInParent = (element) => {
    return Array.from(element.parentNode.children).indexOf(element);
};

/**
 * @name        getRandomIntInclusive
 * @param       min {int}
 * @param       max {int}
 * @desc        Returns a random integer number between min and max (inclusive).
 * @returns     {int}
 */
export const getRandomIntInclusive = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};