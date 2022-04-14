function requestValidator(inputObj) {
    let requirementsObj = ['Method', 'URI', 'Version', 'Message'];
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let regexUri = /^[A-Za-z0-9.]+$/;
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let regexMessage = /[\<\>\\&\'\"]/;

    for (let requirement of requirementsObj) {
        if (!Object.keys(inputObj).includes(requirement.toLowerCase())) {
            throw new Error(`Invalid request header: Invalid ${requirement}`);
        }
    }
    if (!validMethods.includes(inputObj.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    if (!regexUri.test(inputObj.uri) || inputObj.uri == "") {
        throw new Error(`Invalid request header: Invalid URI`);
    }
    if (!validVersions.includes(inputObj.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    } if (regexMessage.test(inputObj.message)) {
        throw new Error(`Invalid request header: Invalid Message`);
    }
    return inputObj;
}
requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});
// requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// });
// requestValidator({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
// });