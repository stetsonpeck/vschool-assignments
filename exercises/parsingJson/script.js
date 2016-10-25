var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        console.log(data.objects[0].pokemon)
        var pokemon = data.objects[0].pokemon;
        var pokelist = ""
        for (i = 0; i < pokemon.length; i++) {
            pokelist += pokemon[i].name + "<br>";

        }
        document.getElementById("pokes").innerHTML = pokelist
    }
};

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();