var string = "ggggggggxkljfvlsjkfg";

for (i = 0; i < string.length; i++) {
    var first = (string[i]);
    var second = (string[i + 1]);
    if (first === second) {
        continue
    } else {
        console.log(second);
        break;
    }
}