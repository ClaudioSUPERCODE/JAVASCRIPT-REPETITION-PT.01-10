
// FUNCTIONS LEVEL 1_1

// Deklariere die Funktion intro(). Im Funktionskörper {} passiert nun folgendes:
// Deklariere die Variable a mit dem Wert 1 + 3.
// Gib zusätzlich Hello World in der Konsole aus.
// Gib den String “1+3 = “ + a in der Konsole aus.

function intro() {
    let a = 1 + 3
    console.log("Hello World")
    console.log("1 + 3 = " + a)
}

intro()


// FUNCTIONS LEVEL 1_2


// Deklariere die Funktion intro2() mit dem Parameter (paramName). Im Funktionskörper {} passiert dann folgendes:
// Deklariere die Variable varName mit dem Wert “SuperCoder”.
// Gib dazu “Hi, “ + varName + “. Mein Name ist ” + paramName + “ .” in der Konsole aus.
// Rufe die Funktion mit einem Argument auf. Gib als Argument deinen eigenen Namen ein.

function intro2(paramName) {
    let varName = "SuperCoder"
    console.log("Hi, " + varName + ". Mein Name ist " + paramName + ".")
}

intro2("Claudio")


// FUNCTIONS LEVEL 1_3


// Deklariere die Funktion intro3() mit den drei Parametern (name, stadt, alter).

// Gib unter Verwendung der entsprechenden Argumente folgenden Satz in der Konsole aus:
// Hallo, mein Name ist SuperCoder. Ich bin 27 Jahre alt. Ich komme aus Düsseldorf.
// Verwende deine persönlichen Daten oder fiktive Daten.


function intro3(name, stadt, alter) {
    console.log("Hallo, mein Name ist " + name + ". Ich bin " + alter + " Jahre alt. Ich komme aus " + stadt + ".")
}

intro3("Claudio", "Haan", 35)


// FUNCTIONS LEVEL 1_5


// Deklariere die Funktion math() mit zwei Parametern. Im Funktionskörper{} passiert folgendes:
// Gib in der Konsole die Multiplikation von den beiden Parametern aus.
// Gib in der Konsole die Division von den beiden Parametern aus.
// Ruf die Funktion mit den Argumenten (10, 2) auf.
// Teste auch andere Werte:

// 30, 20
// 100, 100
// 5, 0
// 45, 173
// 1, 1000


function math(first, second) {
    let multiplication = first * second
    console.log("multiplication: " + multiplication)
    let division = first / second
    console.log("division: " + division)
}

math(10, 2)
math(30, 20)
math(100, 100)
math(5, 0)
math(45, 173)
math(1, 1000)