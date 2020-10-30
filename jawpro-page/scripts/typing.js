const span1 = document.querySelector('.text1');
const span2 = document.querySelector('.text2');
const txt1 = 'Szukasz profesjonalnej firmy remontowej ?';
const txt2 = 'Skontaktuj się z nami';
let indexText1 = 0;
let indexText2 = 0;

addLetterSpan1();

function addLetterSpan1() {

    const addLeter = () => {
        span1.textContent += txt1[indexText1];
        indexText1++;
        if (indexText1 === txt1.length) {

            clearInterval(indexTyping);
            addLetterSpan2();
        }

    }
    const indexTyping = setInterval(addLeter, 50);
}

function addLetterSpan2() {
    const addLeter = () => {
        span2.textContent += txt2[indexText2];
        indexText2++;
        if (indexText2 === txt2.length)
            clearInterval(indexTyping)
    }
    const indexTyping = setInterval(addLeter, 50);
}
