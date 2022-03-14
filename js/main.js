
function trocar(elemento){
   // alert("trocar texto")
    elemento.innerHTML = "Texto trocado.";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui.";
}


function redirecionar(){
    window.open("https://www.youtube.com/");// outra aba
   // window.location.href = "https://www.youtube.com/";// mesma janela
}


function clicou() {
document.getElementById("agradecimento").innerHTML = "<b> Obrigado por clicar </b>" ;
   // console.log(document.getElementById(agradecimento));
   // alert("Obrigado por clicar");
}


function load(){
    alert("Pagina carregada");
}


function funcaoChange(elemento){
    console.log(elemento.value);
}

//function soma(n1, n2){
  //  return n1 + n2;

//alert(soma(5,10));

/*function validaIdade(idade){
    var validar = true;
    if (idade >= 18){
        validar = true;
        alert("Maior Idade");
        console.log(alert);
    }else{
        validar = false;
        alert("Menor Idade");
        console.log(alert)
    }
    return validar
}

var idade = prompt ("Qual sua idade?");
console.log(validaIdade(idade));*/

/*function setReplace(frase, nome, novo_nome){
    return frase.replace (nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));*/

//var d = new Date();
//alert (d);
//alert (d.getMonth()+1);//trazer o mês - acrescentar sempre +1 para trazer o mês certo, pois começa no zero
//alert (d.getMinutes());//trazer os minutos
//alert (d.getDay());//trazer o dia da semana
//alert (d.getHours());//trazer as horas
/*var count;
for(count=0; count <= 5; count++){
    alert(count);
};*/


/*var count = 0;
while (count < 5){
    console.log (count)
    count ++; // ele recebe ele mesmo mais 1
};*/


/*var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
} else{
    alert("menor de idade");
}*/


/*var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome)*/


/*var fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta.nome);*/


/*var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");//acrescentar
lista.pop()//retirar
console.log(lista);
console.log(lista.length);//tamanho - quantidade de itens
console.log(lista.reverse());//elementos ao contrário
console.log(lista.toString());// trazer como string
console.log(litsa.join(" | "))// acrescentar separação de string diferente
//console.log(lista[0,1 ou 2])// escolher o item*/


/*var nome = "Gustavo Louzada";
var n1 = 29;
var n2 = 10; 
var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
console.log(nome);
console.log(n1 + n2);
console.log(frase.toLocaleLowerCase())
//alert(frase.replace("Japão", "Brasil"))*/
