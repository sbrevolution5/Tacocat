function reverseString() {
    let userWord = document.getElementById("tacoCat").value;
    let cleanWord = userWord.replace(/\W+/g, "").toLowerCase();
    // alert(userWord)
    // alert(cleanWord)
    let start = cleanWord.length-1;
    let newWord= ""
    for (let i = start; i >= 0; i--) {
        newWord+= cleanWord[i]
    }
    let output= document.getElementById("flipped");
    output.innerText = newWord;
    result = document.getElementById("yesOrNo")
    if (newWord == cleanWord) {
        confetti.start(1000)
        
        let yesAns = "Yes!!! &#128513; &#128513;"
        result.innerHTML = yesAns
    } else {
        let noAns = "No &#128531;"
        result.innerHTML = noAns
    }
}
