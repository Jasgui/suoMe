const resetButton = document.getElementById('reset');
const textInput = document.getElementById('textInput');

import {
    phrases,
    nouns,
    verbs,
    stats
} from '/vars.js';



resetButton.onclick = () => {
    var test = textInput.value;
    console.log(test);
    console.log(phrases[0].phrase);
};
