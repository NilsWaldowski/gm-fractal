/*******************************************************************************
* IMPORTS
*******************************************************************************/

import $ from 'jquery';



/*******************************************************************************
* CACHE
*******************************************************************************/

const $body = $('body')
const $container = document.querySelector('h1');
const _config = {
    classes: {
        isActive: 'is-active'
    }
}



/*******************************************************************************
* INIT
*******************************************************************************/

export default function init() {

    // return early if no $container is present
    if (!$container) {
        return;
    }

    _bind()
    greet()
}



/*******************************************************************************
*  BIND EVENTS
*******************************************************************************/

function _bind() {
    $container.addEventListener('click', doSomething, false);

    $body.on('click', function() {
        console.log('kjabsdksadkasbj');
    });
}



/*******************************************************************************
* PRIVATE
*******************************************************************************/

/**
 * greet - description
 *
 * @return {type}  description
 */
function greet() {
    console.log('Have a great day!');
}



/**
 * doSomething - description
 *
 * @param  {type} event description
 * @return {type}       description
 */
function doSomething(event) {
    let target = event.currentTarget;

    console.log('h1 was clicked');

    if (target.classList.contains(_config.classes.isActive)) {
        target.classList.remove(_config.classes.isActive);
    } else {
        target.classList.add(_config.classes.isActive);
    }
}
