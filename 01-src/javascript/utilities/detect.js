function getViewport() {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0];

    return {
        width:  w.innerWidth  || e.clientWidth  || g.clientWidth,
        height: w.innerHeight || e.clientHeight || g.clientHeight
    };
}

function getOrientation() {
    return (window.innerHeight > window.innerWidth) ? 'portrait' : 'landscape';
}

module.exports = {
    getViewport: getViewport,
    getOrientation: getOrientation
};
