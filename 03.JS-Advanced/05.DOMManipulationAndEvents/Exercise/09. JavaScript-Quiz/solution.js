function solve() {

  let sections = Array.from(document.getElementsByTagName('section'));
  let result = document.getElementById('results');
  let correctAnswers = 0;
  let index = 0;
  let rightAnswers = ['Второ място', 'Едно, две и три', 'пет', 'три', 'след 28 години'];

  let div = document.getElementById('quizzie');
  div.addEventListener('click', onClick);

  console.log(result);

  function onClick(e) {
    if (e.target.className == 'answer-text') {
      // console.log(e.target)
      if (index <= 4) {
        if (rightAnswers.includes(e.target.textContent)) {
          correctAnswers++;
        }
        sections[index].style.display = 'none';
        index++;
        if (index < 5) {
          sections[index].style.display = 'block';
        }
      } if (index == 5) {
        // sections[index].style.display = 'none';

        if (correctAnswers == 5) {
          result.children[0].children[0].textContent = "Браво , ти позна всичките отговори!!!";
        } else {
          result.children[0].children[0].textContent = `ти имаш ${correctAnswers} верни отговора`;
        }
        result.style.display = 'block';
      }
      // console.log(correctAnswers);
    }
  }
}