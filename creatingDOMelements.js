// ADVANCED VERSION !!!!!

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}


 // ВТОРИ ВАРИАНТ
function createDomElement(type, properties, ...content) {

    let element = document.createElement(type);

    for (let prop of properties) {
        element[prop] = properties[prop];
    }
    for (let current of content) {
        if (current) {
            if (typeof current == String || typeof current == Number) {
                current = document.createTextNode(current);
            }
            element.appendChild(current);
        }
        return element;
    }
}
