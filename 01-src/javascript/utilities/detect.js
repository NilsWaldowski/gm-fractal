/**
 * getViewport - description
 *
 * @return {type}  description
 */
export const getViewport = () => {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0];

    return {
        width:  w.innerWidth  || e.clientWidth  || g.clientWidth,
        height: w.innerHeight || e.clientHeight || g.clientHeight
    };
}


/**
 * getOrientation - description
 *
 * @return {type}  description
 */
export const getOrientation = () => {
    return (window.innerHeight > window.innerWidth) ? 'portrait' : 'landscape';
}
