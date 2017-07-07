const $container = document.querySelector('h1');
const _config = {
    classes: {
        isActive: 'is-active'
    }
}

export default function init() {
    _bind()
    greet()
}

function _bind() {
    $container.addEventListener('click', doSomething, false);
}

function greet() {
    console.log('Have a great day!');
}

function doSomething(event) {
    let target = event.currentTarget;

    console.log('h1 was clicked');

    if (target.classList.contains(_config.classes.isActive)) {
        target.classList.remove(_config.classes.isActive);
    } else {
        target.classList.add(_config.classes.isActive);
    }
}
