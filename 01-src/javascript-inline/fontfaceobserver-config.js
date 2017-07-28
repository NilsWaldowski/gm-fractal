/* eslint-disable */

(function(w) {
    'use strict';

    // if the cookie is already set, we're good and adding the loading-class.
    if (cookie('fonts-loaded') !== null) {
        document.documentElement.className += ' fonts-loaded';
        return;
    }

    var openSans = new FontFaceObserver('Open Sans');

    w.Promise
        .all([openSans.load()])
        .then(function() {
            cookie('fonts-loaded', 'true', 7);
            w.document.documentElement.className += ' fonts-loaded';
        });
}(this));
