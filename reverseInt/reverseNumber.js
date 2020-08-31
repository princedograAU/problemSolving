export default num => {

    // convert number to string first
    // then split and reverse the string
    const reversed = num.toString().split('').reduce((output, char) => output = char + output);
    // convert string to integer
    return num < 0 ? parseInt(reversed)*(-1): parseInt(reversed);
};