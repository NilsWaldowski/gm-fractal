/**
 * var forEach - description
 *
 * @param  {type} array    description
 * @param  {type} callback description
 * @param  {type} scope    description
 * @return {type}          description
 *
 * Usage:
    forEach(document.querySelectorAll('h2'), (index, element) => {
        console.log(element);
    });
 *
 */
export const forEach = (array, callback, scope) => {
    for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]); // passes back stuff we need
    }
}
