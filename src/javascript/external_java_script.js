// check if the string is a noun
function is_noun(the_string){
    letters = the_string.split("");
    if (letters[0].toUpperCase() === letters[0]) {
        return true
    }
    return false
}

// check if the last charackter is a point
function chek_for_point(the_string){
    letters = the_string.split("");
    if (letters[letters.length - 1] == "."){
        return true
    }
    return false
}

// check if the string is a setain type of artikle
function chek_for_artikel(the_string){
    the_string = the_string.toLowerCase();
    if (the_string == "die" || the_string == "das" || the_string == "eine" || the_string == "eines"){
        return true
    }
    return false
} 

// put Innen behind tthe string but before the point
function move_non_letter(the_string){
    letters = the_string.split("");
    if (letters[letters.length - 1].toLowerCase() !== letters[letters.length - 1].toUpperCase()){
        return the_string + "Innen"
    }
    return the_string.substring(0, the_string.length - 1) + "Innen" + letters[letters.length - 1]
}

// shange the text
function gendern(text){
    const myArray = text.split(" ").filter(Boolean);
 
    var scip_word = true

    for (let i=1; i <= myArray.length; i++) {

        if (scip_word){
            scip_word = false
            continue
        }

        var str = String(myArray[i])

        if (chek_for_point(str) || chek_for_artikel(str)){
            scip_word = true
        }

        if (!is_noun(str) || (str.length <= 3)){
            continue;
        }

        myArray[i] = move_non_letter(str)
        
    }
    return myArray
}

// convert text on button click
function convert_text(){
    var container = document.getElementById('eingabefeld').value;
    var finished_string = gendern(container).join(" ");
    document.getElementById("ausgabefeld").innerText = finished_string;
}


