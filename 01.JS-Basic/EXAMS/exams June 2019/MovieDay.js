function movieDay(input){

let pictureTime = Number(input[0])
let sceneNumber = Number(input[1])
let sceneTime = Number(input[2])
let prepare = pictureTime * 0.15
let timeSpend = prepare + sceneNumber * sceneTime

if (pictureTime >= timeSpend){
    console.log(`You managed to finish the movie on time! You have ${Math.ceil(pictureTime-timeSpend)} minutes left!`)
}
else 
{console.log(`Time is up! To complete the movie you need ${Math.ceil(timeSpend - pictureTime)} minutes.`)}

}
movieDay(["120","10","11"])