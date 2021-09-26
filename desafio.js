var jogo = "tesoura corta papel. Papel cobre veneno. Pedra esmaga lagarto. Lagarto corta spock. Spock vaporiza tesoura. Tesoura decapita Spock. Lagarto come papel. Veneno refuta lagarto. Spock vaporiza pedra. Veneno esmaga tesoura."
var resultado1 = jogo.replace(/esmaga/g, "quebra");
var resultado2 = resultado1.replace(/lagarto/gi, "tesoura");
var resultado3 = resultado2.replace(/spock/gi, "papel");
var resultado4 = resultado3.replace(/vaporiza/g, "embrulha");
var resultado5 = resultado4.replace(/cobre/g, "embrulha");
var resultado6 = resultado5.replace(/decapita/g, "corta");
var resultado7 = resultado6.replace(/come/g, "corta");
var resultado8 = resultado7.replace(/veneno/gi, "pedra");
var resultadoFinal = resultado8.replace(/refuta/g, "quebra");

console.log(resultadoFinal);