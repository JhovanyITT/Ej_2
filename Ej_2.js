// 2.	Reversión de cadena: Dada una frase y luego muestra
//  la misma frase pero con las palabras en orden inverso.

const cadenaNormal = "Cadena";
const cadenaInvertida = "";

var i = 0;
for(i = cadenaNormal.length; i >= 0; i--){
    cadenaInvertida += cadenaNormal.charAt(i);
}

console.log("La cadena invertida es: " + cadenaInvertida);