function reverseString() {
    let userWord = document.getElementById("tacoCat").value;
    // alert(userWord)
    let start = userWord.length-1;
    let newWord= ""
    for (let i = start; i >= 0; i--) {
        newWord+= userWord[i]
    }
    let output= document.getElementById("flipped");
    output.innerText = newWord;
}