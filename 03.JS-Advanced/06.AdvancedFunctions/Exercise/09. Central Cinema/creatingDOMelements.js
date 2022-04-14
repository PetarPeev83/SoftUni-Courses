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