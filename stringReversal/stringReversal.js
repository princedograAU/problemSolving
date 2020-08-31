export default word => {
    // -------------------- Easy Way ---------------------------
    // return word.split('').reverse().join('');

    // ------------------------ Traditional Way ----------------------
    // let revWord = '';
    // word.split('').forEach(character => {
    //     revWord = character + revWord;
    // });
    // return revWord;

    // ---------------------------- Best Way -----------------------------
    return word.split('').reduce((output, character) => output = character + output);
}