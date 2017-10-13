
/**
* Import Utilities
*/
import { debugMode } from './utilities/projectSettings'
import * as detect from './utilities/detect'
import ee from './utilities/eventEmitter'
import './utilities/cssBreakpoint'


/**
* Throttled Scroll & Debounce Resize
*/
import './utilities/throttledScroll'
import './utilities/debouncedResize'


/**
* Debug Messages
*/
if (debugMode) {

    // viewport size
    console.log('VW: ' +  detect.getViewport().width + '\n' + 'VH: ' +  detect.getViewport().height)

    // on scroll
    ee.on('window:throttledScroll', () => {
        console.log('scroll happend')
    });

    // on resize
    ee.on('window:debouncedResize', () => {
        console.log('VW: ' +  detect.getViewport().width + '\n' + 'VH: ' +  detect.getViewport().height)
    });
}


/**
* Init Vendor Plugins
*/
import fastclick from 'fastclick'
fastclick.attach(document.body);


/**
* Init Project Modules
*/
import module from './modules/moduleExample'
module();

import moduleExample2 from './modules/moduleExample2'
moduleExample2();
