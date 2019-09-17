// we define all kinds of words we want to display
const texts = ['website','illustrations','pancakes'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
// use self invoke 
(function type (){
    if(count == texts.length){
        count = 0;
    }
    currentText = texts[count];
    console.log(currentText );
    // letter increment 1 char at a time.
    letter = currentText.slice(0,++index);
    document.querySelector('.typing').textContent = letter;
    // Move to next text on the array
    if(letter.length === currentText.length){
        count ++;
        index = 0;
    }
    setTimeout(type,250);
}());