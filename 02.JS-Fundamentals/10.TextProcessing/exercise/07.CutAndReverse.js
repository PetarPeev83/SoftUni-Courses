function cutReverse(text) {
    let firstHalf = text.substring(0, text.length / 2).split("").reverse().join("");
    let secondHalf = text.substring(text.length / 2, text.length).split("").reverse().join("");
    console.log(firstHalf);
    console.log(secondHalf);
}
cutReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');