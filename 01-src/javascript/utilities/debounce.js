/**
 * debounce - description
 *
 * @param  {type} func      description
 * @param  {type} wait      description
 * @param  {type} immediate description
 * @return {type}           description
 */
export default function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
