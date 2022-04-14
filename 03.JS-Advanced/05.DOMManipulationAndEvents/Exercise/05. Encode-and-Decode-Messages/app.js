function encodeAndDecodeMessages() {

    let recievedTextArea = document.getElementById('main').children[1].children[1];
    document.getElementById('main').addEventListener('click', coding);

    function coding(e) {
        if (e.target.tagName == 'BUTTON' && e.target.textContent == 'Encode and send it') {
            let textToEncode = e.target.parentElement.children[1];
            recievedTextArea.value = encode(textToEncode.value);
            textToEncode.value = '';
        } else if (e.target.tagName == 'BUTTON' && e.target.textContent == 'Decode and read it') {
            let textToDecode = e.target.parentElement.children[1];
            recievedTextArea.value = decode(textToDecode.value);
        }

        function encode(textForEncoding) {
            let encodedText = '';
            for (let i = 0; i < textForEncoding.length; i++) {
                let charNum = textForEncoding[i].charCodeAt(0);
                charNum++;
                encodedText += String.fromCharCode(charNum);
            }
            return encodedText;
        }
        function decode(textForDecoding) {
            let decodedText = '';
            for (let i = 0; i < textForDecoding.length; i++) {
                let charNum = textForDecoding[i].charCodeAt(0);
                charNum--;
                decodedText += String.fromCharCode(charNum);
            }
            return decodedText;
        }
    }
}
