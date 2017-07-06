
/**
* Import Utilities
*/
import { debugMode } from './utilities/projectSettings'
import detect from './utilities/detect'
import ee from './utilities/eventEmitter'
import './utilities/cssBreakpoint'

debugMode ? console.log('VW: ' +  detect.getViewport().width + '\n' + 'VH: ' +  detect.getViewport().height) : false


/**
* Throttled Scroll
*/
import './utilities/throttledScroll'
ee.on('window:throttledScroll', () => {
    debugMode ? console.log('scroll happend') : false
});


/**
 * Debounce Resize
 */
import './utilities/debouncedResize'
ee.on('window:debouncedResize', () => {
    debugMode ? console.log('resize happend') : false
});


/**
* Init Vendor Plugins
*/
import fastclick from 'fastclick'
fastclick.attach(document.body);


/**
* Init Project Modules
*/
import module from './modules/moduleTest'
module();
