function extractText() {

    // const items = document.getElementById('items').children;
    const items = document.querySelectorAll('#items li');
    
    const result = [];
    for (const item of Array.from(items)) {
        result.push(item.textContent);
    }
    document.getElementById('result').textContent = result.join('\n');

}