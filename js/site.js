function reverseString() {
    let userWord = document.getElementById("tacoCat").value;
    let errorText = document.getElementById("errorText");
    if(userWord == ""){
        errorText.innerText ="Error: Please enter a word!";
        return
    }else{
        errorText.innerText = ""
    }

    let cleanWord = userWord.replace(/\W+/g, "").toLowerCase();
    // alert(userWord)
    // alert(cleanWord)
    let start = cleanWord.length-1;
    let newWord= ""
    for (let i = start; i >= 0; i--) {
        newWord+= cleanWord[i]
    }
    // This section is to display capitalization and punctuation to the user
    let prettyStart = userWord.length
    let prettyWord= ""
    // j is used to not skip letters in the new word.  Only increments when a letter is used
    let j = 0
    for (let i = 0; i< prettyStart; i++) {
        if(userWord[i].match(/[A-Z]/) != null){
            prettyWord += newWord[j].toUpperCase()
            j++
        } else if(userWord[i].match(/[a-z]/) != null){
            prettyWord += newWord[j].toLowerCase()
            j++
        } else if(userWord[i].match(/\W/) != null){ //if nonword character, put same character in pretty word
            prettyWord+= userWord[i]
        } else{// handles numbers and underscores
            prettyWord += newWord[j]
            j++
        }
        
    }
    let output= document.getElementById("flipped");
    output.innerText = newWord;
    let prettyOut = document.getElementById("prettyOut");
    prettyOut.innerText = prettyWord;
    let result = document.getElementById("yesOrNo")
    if (newWord == cleanWord) {
        confetti.start(1000)
        
        let yesAns = "Yes!!! &#128513; &#128513;"
        result.innerHTML = yesAns
    } else {
        let noAns = "No &#128531;"
        result.innerHTML = noAns
    }
}
