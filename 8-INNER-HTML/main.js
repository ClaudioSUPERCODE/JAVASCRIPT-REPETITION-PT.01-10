
// INNER.HTML LEVEL 1_2

// Es gibt auch noch eine andere Variante, um Inhalte mit JS in unser HTML-Dokument zu schreiben.
// Mit innerHTML können wir Inhalte in unser HTML-Element hinzufügen oder ganze HTML-Elemente hinzufügen. 


// Erstelle mit document.getElementById(“info”).innerHTML eine h1 mit dem Text “Hello World”.
// Füge noch eine h2 hinzu mit dem Text “How are you?”.

// Sieh’ dir das Ergebnis über den Live Server an.


document.getElementById("info").innerHTML = "<h1>Hello World</h1>" + "<h2>How are you?</h2>"

// Jetzt arbeiten wir weiter mit dem Code und fügen noch ein <div> mit der ID “container” hinzu.

// Nun nutzen wir document.write() und innerHTML, um jeweils Inhalte in HTML zu schreiben.

// Nutze document.getElementById('container').innerHTML, um einen <p>-Tag mit dem Text “start of the element” zu kreieren
// Schreiben nun document.write("end of the element")

// Analysiere das Ergebnis im Live Server.
// Mit document.write() fügt man immer am Ende des HTML Dokuments die Inhalte hinzu.

document.getElementById("container").innerHTML = "<p>start of the element</p>"

document.write("end of the element")


// INNER.HTML LEVEL 1_3

document.getElementById("gallery").innerHTML = "<figure><img src='https://fastly.picsum.photos/id/641/300/300.jpg?hmac=Smgte-gd12ojqnyrQXZyIyOz1wrfX9YAJc8rkV_Dez4' alt='random picture'><figcaption>Fig.1</figcaption></figure>" + "<figure><img src='https://fastly.picsum.photos/id/641/300/300.jpg?hmac=Smgte-gd12ojqnyrQXZyIyOz1wrfX9YAJc8rkV_Dez4' alt='random picture'><figcaption>Fig.2</figcaption></figure>" + "<figure><img src='https://fastly.picsum.photos/id/641/300/300.jpg?hmac=Smgte-gd12ojqnyrQXZyIyOz1wrfX9YAJc8rkV_Dez4' alt='random picture'><figcaption>Fig.3</figcaption></figure>"