export default word => {
    let copy = "";
    copy = word.split('').reduce((output, char) => output = char + output);
    return !word.localeCompare(copy) ? true: false;
}