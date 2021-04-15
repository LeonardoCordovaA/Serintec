function getCookie(cname, str) {
    if (str === void 0) { str = ""; }
    const name = cname + "=";
    const ca = str.split(';');
    for (const i = 0; i < ca.length; i++) {
        const c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function objectIsEmpty(object) {
    if (Object.entries(object).length === 0 && object.constructor === Object) {
        return true
    }
    return false;
}

//export const getCookie = getCookie;
//export const objectIsEmpty = objectIsEmpty;