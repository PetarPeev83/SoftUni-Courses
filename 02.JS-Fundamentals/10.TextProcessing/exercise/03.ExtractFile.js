function extractFile(filePath) {
    let splittedPath = filePath.split("\\");
    let file = splittedPath[splittedPath.length - 1].split(".");
    let extension = file.pop();
    let fileName = file.join(".");
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
// extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.pox.cs');