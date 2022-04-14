window.addEventListener('load', solution);

function solution() {
  let [name, email, phone, address, postalCode] = Array.from(document.querySelectorAll('#form div input'));
  let submitBtn = document.getElementById('submitBTN');
  let ulInfoPreview = document.getElementById('infoPreview');
  let editBtn = document.getElementById('editBTN');
  let continueBtn = document.getElementById('continueBTN');
  let blockDiv = document.getElementById('block');

  submitBtn.addEventListener('click', submitting);

  function submitting(e) {
    if (name.value == "" || email.value == "") {
      return;
    };
    let liName = document.createElement('li');
    liName.textContent = `Full Name: ${name.value}`;
    ulInfoPreview.appendChild(liName);
    let liEmail = document.createElement('li');
    liEmail.textContent = `Email: ${email.value}`;
    ulInfoPreview.appendChild(liEmail);
    let liPhone = document.createElement('li');
    liPhone.textContent = `Phone Number: ${phone.value}`;
    ulInfoPreview.appendChild(liPhone);
    let liAddress = document.createElement('li');
    liAddress.textContent = `Address: ${address.value}`;
    ulInfoPreview.appendChild(liAddress);
    let liPostalCode = document.createElement('li');
    liPostalCode.textContent = `Postal Code: ${postalCode.value}`;
    ulInfoPreview.appendChild(liPostalCode);

    [name, email, phone, address, postalCode].forEach(x => x.value = "");
    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    editBtn.addEventListener('click', () => {
      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;

      name.value = liName.textContent.slice(11);
      email.value = liEmail.textContent.slice(6);
      phone.value = Number(liPhone.textContent.slice(13));
      address.value = liAddress.textContent.slice(9);
      postalCode.value = Number(liPostalCode.textContent.slice(12));

      ulInfoPreview.innerHTML = ""; // PREMAHVA VSICHITE DECA NA ELEMENTA;
    });
    continueBtn.addEventListener('click', () => {
      blockDiv.innerHTML = "<h3>Thank you for your reservation!</h3>";
    });
  };
};
