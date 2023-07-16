
// STRING METHODS //

// Nun wollen wir Strings miteinander verketten. Auf den folgenden Folien kannst Du ein paar Beispiele ausprobieren.

// Deklariere zwei Variablen: x mit String "Hello " und y mit String "World<br>".

// Addiere x mit y und speichere das Ergebnis als Variable z;
// Nutze den Befehl document.write() mit Wert z zwischen den Klammern, um im Dokument Werte anzuzeigen. Es wird im HTML Dokument angezeigt.

// Schreibe x + " " + y und speichere alles in der Variable n;
// Nutze den Befehl document.write() mit Wert n;

// Addiere x und einen String mit "World". Nutze den passenden Zuweisungsoperator.

// Nutze den Befehl document.write() mit Wert x um den String im Dokument auszugeben;

let x = "Hello"

let y = "World<br>"

let n = x + " " + y
document.write(n)

x = x + " World"
document.write(x)


// Deklariere eine Variable meinString mit String "Ich bin Erster";

// Nutze einen Zuweisungsoperator, um einen anderen String " Ich komme auf Platz zwei", zu meinString hinzuzufügen.
// Gebe dann meinString in der Konsole aus.


let meinString = "Ich bin Erster."

meinString += " Ich komme auf Platz zwei"

console.log(meinString)