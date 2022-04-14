// function solve() {

//   let [inputField, outputField] = Array.from(document.querySelectorAll('textarea'));
//   // console.log(inputField, outputField);
//   let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
//   // console.log(generateBtn, buyBtn);
//   // let table = document.querySelector('table.table tbody'); 
//   //ili
//   let table = document.getElementsByTagName('tbody')[0];

//   generateBtn.addEventListener('click', generate);
//   buyBtn.addEventListener('click', buyItems);

//   function generate(e) {
//     let items = JSON.parse(inputField.value);
//     // console.log(items);
//     for (let item of items) {

//       let rowTr = document.createElement('tr');       //purvo sazdavade "tr" kletkata

//       let imgCell = document.createElement('td');          //posle sazdavame "td" kletkite
//       let nameCell = document.createElement('td');
//       let priceCell = document.createElement('td');
//       let decFactorCell = document.createElement('td');
//       let checkboxCell = document.createElement('td');

//       // sled tova im dobavqme sadurjanieto

//       let img = document.createElement('img');
//       img.src = item.img;                                  // atributut se dobavq s "." a sudarjanieto s "="
//       imgCell.appendChild(img);                             // zakachame go kum "td" kletkata

//       let nameP = document.createElement('p');
//       nameP.textContent = item.name;
//       nameCell.appendChild(nameP);

//       let priceP = document.createElement('p');
//       priceP.textContent = item.price;
//       priceCell.appendChild(priceP);

//       let decFacP = document.createElement('p');
//       decFacP.textContent = item.decFactor;
//       decFactorCell.appendChild(decFacP);

//       let check = document.createElement('input');
//       check.type = 'checkbox';
//       checkboxCell.appendChild(check);

//       rowTr.appendChild(imgCell);
//       rowTr.appendChild(nameCell);
//       rowTr.appendChild(priceCell);
//       rowTr.appendChild(decFactorCell);
//       rowTr.appendChild(checkboxCell);

//       //sled kato sme suzdali vsichki kletki i sme zakachili informaciqta im , trqbva da gi zakachim za parent kletkata 
//       // koiato v sluchaia e "tr" koiato triabva da sme suzdali izvun cikala i na vsiako zavurtane na cikala zakacha kum "tr"
//       // tekushtiat element i nakraia da e zakachim v sluchaia na "tbody"

//       table.appendChild(rowTr);
//     }
//   }
//   function buyItems(e) {
//     let buyItems = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))   //suzdavame masiv ot cheknatite elementi 
//       //za da gi mapnem za da moje da vzemem parentElement na parentElement koeto e celiat red 
//       .map(el => el.parentElement.parentElement)
//       .map(x => ({                             ////posle vtori put map za da iskarame textContent-a koito ni triabva;
//         name: x.children[1].textContent,
//         price: x.children[2].textContent,
//         decFactor: x.children[3].textContent,
//       })); //kato go suzdavame v 'map' obekta triabva da e v otdelni skobi za da raboti

//     let bougt = [];
//     let totalPrice = 0;
//     let decorationFactor = 0;
//     for (let currentItem of buyItems) {
//       bougt.push(currentItem.name);
//       totalPrice += Number(currentItem.price);
//       decorationFactor += Number(currentItem.decFactor)
//     }
//     let average = decorationFactor / bougt.length;
//     // console.log();
//     outputField.value = `Bought furniture: ${bougt.join(', ')}
// Total price: ${totalPrice.toFixed(2)}
// Average decoration factor: ${average}`;
//   }
// }





//////////////////////// reshenie s funkcia za suzdavane i zakachane na elementi //////////////////////////////////////////


function solve() {

  let [inputField, outputField] = Array.from(document.querySelectorAll('textarea'));
  // console.log(inputField, outputField);
  let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
  // console.log(generateBtn, buyBtn);
  // let table = document.querySelector('table.table tbody'); 
  //ili
  let table = document.getElementsByTagName('tbody')[0];

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buyItems);

  function generate(e) {
    let items = JSON.parse(inputField.value);
    // console.log(items);



    //// suzdavane i zakachane na tablicata v HTML-a 
    for (let item of items) {

      let row = document.createElement('tr');       //purvo sazdavade "tr" kletkata



      row.appendChild(createCell('img', { src: item.img }));
      row.appendChild(createCell('p', {}, item.name));
      row.appendChild(createCell('p', {}, item.price));
      row.appendChild(createCell('p', {}, item.decFactor));
      row.appendChild(createCell('input', { type: 'checkbox' }));

      table.appendChild(row);
    }
  }
  function createCell(nestedTag, props, content) {
    const cell = document.createElement('td');
    const nested = document.createElement(nestedTag);

    for (let prop in props) {
      nested[prop] = props[prop];
    }
    if (content) {
      nested.textContent = content;
    }
    cell.appendChild(nested);

    return cell;
  }



  function buyItems(e) {
    let buyItems = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))   //suzdavame masiv ot cheknatite elementi 
      //za da gi mapnem za da moje da vzemem parentElement na parentElement koeto e celiat red 
      .map(el => el.parentElement.parentElement)
      .map(x => ({                             ////posle vtori put map za da iskarame textContent-a koito ni triabva;
        name: x.children[1].textContent,
        price: x.children[2].textContent,
        decFactor: x.children[3].textContent,
      })); //kato go suzdavame v 'map' obekta triabva da e v otdelni skobi za da raboti

    let bougt = [];
    let totalPrice = 0;
    let decorationFactor = 0;
    for (let currentItem of buyItems) {
      bougt.push(currentItem.name);
      totalPrice += Number(currentItem.price);
      decorationFactor += Number(currentItem.decFactor)
    }
    let average = decorationFactor / bougt.length;
    // console.log();
    outputField.value = `Bought furniture: ${bougt.join(', ')}
Total price: ${totalPrice.toFixed(2)}
Average decoration factor: ${average}`;
  }
}