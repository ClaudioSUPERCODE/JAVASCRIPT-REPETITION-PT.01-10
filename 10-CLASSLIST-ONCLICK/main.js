
// CLASSLIST-ONCLICK

// Füge im HTML einen Button “STYLE HEADLINE” hinzu.
// Gib dem Button die Funktion changeBGC() mit.
// Im JavaScript nutzt du jetzt den Button, um der Headline das neue CSS Styling zuzuweisen.
// Erstelle auch einen Button “RESET HEADLINE” und weise ihm die Funktion resetBGC() zu.
// Wie der Name schon sagt, soll das Styling der Headline beim Klicken auf den Button zurückgesetzt werden, also musst du die Funktion im JavaScript dementsprechend definieren.

// https://www.w3schools.com/jsref/prop_element_classlist.asp

let headline = document.getElementById("headline")

function changeBGC() {
    let headline = document.getElementById("headline").classList
    headline.add("myStyle")
}

function resetBGC() {
    let headline = document.getElementById("headline").classList
    headline.remove("myStyle")
}