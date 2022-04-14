function solve() {
  let text = document.getElementById('input').value;
  let result = document.getElementById('output');

  let splitted = text.split(".").filter(x => x.length > 0);
  let outputArr = [];
  let threeSentences = '';
  let counter = 0;

  for (let i = 0; i < splitted.length; i++) {
    let current = splitted[i];
    console.log(current);
    counter++;
    if (counter % 3 === 0) {
      threeSentences += current + '.';
      // threeSentences = `<p>${threeSentences}</p>`;
      outputArr.push(threeSentences);
      threeSentences = '';
    } else {
      threeSentences += current + '.';
    }
  }
  if (counter % 3 !== 0) {
    outputArr.push(threeSentences);
  }
  for (let p = 0; p < outputArr.length; p++) {
    outputArr[p] = `<p>${outputArr[p]}</p>`;
  }
  result.innerHTML = outputArr.join('/n');
  // console.log(outputArr.length);
}