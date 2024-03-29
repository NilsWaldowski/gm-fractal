/* eslint-disable */

// cookie function from https://github.com/filamentgroup/cookie/
function cookie(name, value, days) {
    var expires;
    // if value is undefined, get the cookie value
    if (value === undefined) {
        var cookiestring = "; " + window.document.cookie;
        var cookies = cookiestring.split("; " + name + "=");
        if (cookies.length == 2) {
            return cookies.pop().split(";").shift();
        }
        return null;
    }
    else {
        // if value is a false boolean, we'll treat that as a delete
        if (value === false) {
            days = -1;
        }
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + ( days * 24 * 60 * 60 * 1000 ));
            expires = "; expires=" + date.toGMTString();
        }
        else {
            expires = "";
        }
        window.document.cookie = name + "=" + value + expires + "; path=/";
    }
}
