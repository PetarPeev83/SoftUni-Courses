function solve() {
   document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
   document.getElementsByClassName('checkout')[0].addEventListener('click', checkout);

   let cart = [];
   let output = document.getElementsByTagName('textarea')[0];
   output.value = "";

   function onClick(ev) {
      if (ev.target.tagName == 'BUTTON' && ev.target.classList.contains('add-product')) {
         let product = ev.target.parentNode.parentNode;
         let name = product.getElementsByClassName('product-title')[0].textContent;
         //let name = product.querrySelector('.product-title').textContent;
         let price = Number(product.getElementsByClassName('product-line-price')[0].textContent);
         // let price = Number(product.querrySelector('.product-line-price').textContent);

         cart.push({
            name,
            price
         });
         output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      }
   }
   function checkout() {
      let products = [];
      cart.forEach(x => products.push(x.name));
      products = Array.from(new Set(products));

      let totalPrice = cart.reduce((a, b) => a + b.price, 0);
      // console.log(products);
      // console.log(totalPrice);
      output.value += `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.\n`
      document.getElementsByClassName('shopping-cart')[0].removeEventListener('click', onClick);
      document.getElementsByClassName('checkout')[0].removeEventListener('click', checkout);
   }
}