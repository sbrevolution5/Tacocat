function reverseString() {
    let userWord = document.getElementById("tacoCat").value;
    let cleanWord = userWord.replace(/\W+/g, "").toLowerCase();
    // alert(userWord)
    alert(cleanWord)
    let start = cleanWord.length-1;
    let newWord= ""
    for (let i = start; i >= 0; i--) {
        newWord+= cleanWord[i]
    }
    let output= document.getElementById("flipped");
    output.innerText = newWord;
}