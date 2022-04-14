function extensibleObject() {
    return {
        extend: function (template) {
            let objectProto = Object.getPrototypeOf(this);
            let templateEntries = Object.entries(template);

            for (let [key, value] of templateEntries) {
                if (typeof value == 'function') {
                    objectProto[key] = value;
                } else {
                    this[key] = value;
                };
            };
        },
    };
};
const myObj = extensibleObject();

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);
console.log(myObj);