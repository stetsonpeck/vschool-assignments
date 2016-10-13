var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        console.log(data.objects[0].pokemon)
        var pokemon = data.objects[0].pokemon;
        for (i = 0; i < pokemon.length; i++) {
            $(".pokes").append(pokemon[i].name.replace("-", "&#8209;") + ",");
            $(document).ready(function () {
                $(".pokes").animate({ // call animate function on elements with class="scroll"
                    right: $(document).width() // animates right value from the original -200px(from css) to the documents width(ie if elements right value = the document width, then element is off screen)
                }, 200000); // 3000 is duration in milliseconds (ie 3 seconds)

            });

        }

    }
};


xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();