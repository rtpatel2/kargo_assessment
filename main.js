var input = process.argv.slice(2);

for (var i in input) {
    process.stdout.write(int_to_str(input[i]));
    if (i != input.length - 1) {
        process.stdout.write(',');
    }
}

function int_to_str(input) {
    const dict = {
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

    var str = "";
    // input = +input; // Uncomment this line to disregard leading zeros.
    var input_str = input.toString();
    for (var i in input_str) {
        str += dict[input_str.charAt(i)];
    }
    return str;
}