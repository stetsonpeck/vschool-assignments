var lyrics = ["This", "hit", "that", "ice", "cold",
    "Michelle", "Pfeiffer", "that", "white",
    "gold", "This", "one", "for", "them",
    "hood", "girls", "Them", "good", "girls",
    "straight", "masterpieces", "Stylin'",
    "whilen'", "livin'", "it", "up", "in",
    "the", "city", "Got", "Chucks", "on",
    "with", "Saint", "Laurent", "Gotta", "kiss",
    "myself", "I'm", "so", "pretty"
];
var lyricString = lyrics.join(" ");

console.log(lyricString)

lyrics.reverse();
var lyricStringR = lyrics.join(" ")
console.log(lyricStringR)

for (i = 1; i < lyrics.length; i = i + 2)
    console.log(lyrics[i])