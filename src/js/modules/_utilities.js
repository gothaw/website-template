/**
 * @name        getChildIndexInParent
 * @param       element
 * @desc        Function gets index of the element with respect to its parent.
 * @returns     {int}
 */
export const getChildIndexInParent = (element) => {
    return Array.from(element.parentNode.children).indexOf(element);
};