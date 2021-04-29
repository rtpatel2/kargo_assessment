var input = process.argv.slice(2);
console.log("inputs: ", input);

var dict = {
    1 : "One",
    2 : "Two",
    3 : "Three",
    4 : "Four",
    5 : "Five",
    6 : "Six",
    7 : "Seven",
    8 : "Eight",
    9 : "Nine",
    0 : "Zero"
};

function int_to_str(input) {
    var str = "";
    while (input > 0) {
        str = dict[input % 10] + str;
        input = Math.floor(input / 10);
    }
    return str;
}