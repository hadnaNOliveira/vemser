var n1 = Number(prompt("Insira um valor:"))
var opt = prompt("Informe a operação desejada")
var n2 = Number(prompt("Insira um valor:"))


if (typeof n1 === Number && n1.toString() !== NaN
    && typeof n2 === Number && n2.toString() !== NaN) {

        if(opt === "+") {
            var resultado = n1 + n2
            alert(resultado)
        }
        if (opt === "-") {
            var resultado = n1 - n2
            alert(resultado)
        }
        if (opt === "*") {
            var resultado = n1 * n2
            alert(resultado)
        }
        if (opt === "/" && n1 !== "0" && n2 !== "0") {
            var resultado = n1 / n2
            alert(resultado)
        }
}
else if (opt !== "+" && opt !== "-" && opt !== "/" && opt !== "*") {
    prompt("Por favor, insira um operador válido")
}
else {
    alert("Utilize apenas números, para realizar a operação desejada.")
}
