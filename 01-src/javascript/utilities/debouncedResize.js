import ee from './eventEmitter'
import debounce from './debounce'

window.addEventListener('resize', debounce(() => {
    ee.trigger('window:debouncedResize');
}, 132));
