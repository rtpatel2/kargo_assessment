var input = process.argv.slice(2);

for (var x in input) {
    process.stdout.write(int_to_str(input[x]) + '\n');
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
    while (input > 0) {
        str = dict[input % 10] + str;
        input = Math.floor(input / 10);
    }
    return str;
}