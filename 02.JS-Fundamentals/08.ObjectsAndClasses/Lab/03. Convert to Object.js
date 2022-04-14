function toObject(jsonToObject) {

   let person = JSON.parse(jsonToObject);
   for (let currentKey of Object.keys(person)){
       console.log(`${currentKey}: ${person[currentKey]}`);
   }
}
toObject('{"name": "George", "age": 40, "town": "Sofia"}');