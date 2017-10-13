/**
 * throttledScroll - description
 */
import ee from './eventEmitter'
import fastdom from 'fastdom'

// https://github.com/guardian/frontend/ - /static/src/javascripts/bootstraps/standard/main.js
// Adds a global window:throttledScroll event to ee, which throttles
// scroll events until there's a spare animationFrame.
// Callbacks of all listeners to window:throttledScroll are run in a
// fastdom.read, meaning they can all perform DOM reads for free
// (after the first one that needs layout triggers it).
// However, this means it's VITAL that all writes in callbacks are delegated to fastdom
let scrollRunning = false


/**
 * onScroll - description
 *
 * @return {type}  description
 */
let onScroll = () => {
    if (!scrollRunning) {
        scrollRunning = true;
        fastdom.measure(function() {
            ee.trigger('window:throttledScroll');
            scrollRunning = false;
        });
    }
}


window.addEventListener('scroll', 'requestIdleCallback' in window ?
    function() {
        window.requestIdleCallback(onScroll)
    } :
    onScroll
);
