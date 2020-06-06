// var numeroA = 30;
// var numeroB = 45;
// var pegaValorA = numeroA;
// numeroA = numeroB;
// numeroB = pegaValorA;

// console.log(numeroA)
/////////////////////////////////////////////

// function metade(numero) {
//     return numero/2;
//  }
//  console.log(metade(6))
///////////////////////////////////////////////////

// function multiplicar(numero1,numero2){
//     return numero1 * numero2 ;
//   }
//    console.log(multiplicar(6, 2))
/////////////////////////////////////////////////
// function add (num1, num2){
//     return num1 + num2;
// }

// function somaPorTres(num1, num2) {
//     var resultadoDaSoma = add (num1, num2);
//     console.log(resultadoDaSoma)
//     return resultadoDaSoma * 3;
//  }

//  console.log(somaPorTres(2,2))
////////////////////////////////////////////////////////////////
//Crie função dobroDoProximo() que recebe um parâmetro e nos retorna duas vezes mais que o próximo, ou seja, parâmetro + 1.
// function somar(numero1){
//       return numero1 + numero1 ;
//     }

//      function dobroDoProximo(num1){
//        return somar (num1 + 1)

//      }
//      console.log(dobroDoProximo(2))

/////////////////////////////////////
//Vamos criar uma função perimetro que nos diga o perímetro de um círculo quando damos a ele o raio como parâmetro.
//Também a função area que nos dá a área de um círculo quando recebe o raio como parâmetro.
//  function perimetroCirculo(raio){
//  return  3.14 * raio * 2;
// }
// console.log(perimetroCirculo(4))

// function areaCirculo(raio){
//  return 3.14 * raio * raio;
// }
// console.log(areaCirculo(4))
////////////////////////////////////////////////
//Vamos testar: Iremos criar uma função chamada tamanhoNomeCompleto, que recebe um nome e um sobrenome como parâmetros, e que irá devolver o tamanho total, contando um espaço extra para separar ambos:
//  function tamanhoNomeCompleto(nome, sobrenome){
//    var concatenar = nome + " " + sobrenome;
//      return  concatenar.length
//     }
//     console.log(tamanhoNomeCompleto("Ma", "Ro"))
/////////////////////////////////
//Escreva a função escreverCartao, que recebe como parâmetros um título, um nome e um sobrenome e retorna uma única string como resultado. Por exemplo:
// function  escreverCartao(titulo, nome, sobrenome){
//   return (titulo + " " + nome + " " + sobrenome)
//    }

//    console.log(escreverCartao("Dra.", "Mara", "Rosa"))

//////////////////////////////////////////
// function  mat(num, num2){
//     return Math.min(num, num2)
//      }

//      console.log(mat(5, 6))

// Math.floor(5.6) // arredonda para baixo
// Math.round(5.6) // arredonda para cima
// Math.min(5, 6)
// Math.max(5, 6)
// Math.abs(-5, -6)
////////////////////////////
//Escreva uma função gerarProbabilidade(), que não recebe parâmetros e retorna a porcentagem de probabilidade de chuva, calculada aleatoriamente usando Math.random ().

//   function gerarProbabilidade() {
//     return Math.random() * 100
//   }

// console.log(gerarProbabilidade())

//////////////////////////////////////
// var numero = 6;
// if (numero > 8) {
//   console.log('Sim');
// } else {
//   console.log('Não');
// }
//Declara a variável diaDeSemana que receba uma string "domingo". Depois implemente uma condicional usando o if que compare se diaDeSemana é igual a "domingo", se for verdadeiro imprima uma string "Hoje é dia de futebol!!!".
// var diaDeSemana = "domingo";
// if (diaDeSemana == "domingo") {
//   console.log("Hoje é dia de futebol!!!");
// } else {
//   console.log('Dia de trampo :/');
// } // pq diz a solução faz comparações contra strings

// var diaDeSemana = "domingo";
// var dia = "domingo";
// if (diaDeSemana == dia) {
//   console.log("Hoje é dia de futebol!!!");
// } else {
//   console.log('Dia de trampo :/');
// }

//Define a função hojeSeJoga, que receba por parâmetro uma string que informe o día da semana. Esta função deve retornar"Hoje é dia de futebol!!!" se parâmetro for "domingo", caso contrário deve retornar "Hoje não é dia de futebol :(".
// var dia = "domingo"
// function hojeSeJoga(diaDaSemana) {
//   if ( diaDaSemana == dia) {
//    return console.log("Hoje é dia de futebol!!!");
//   } else {
//    return console.log("Hoje não é dia de futebol :(");
//   }
// }

// hojeSeJoga("domingo")

//Escreva a função eNumeroDaSorte que, recebendo um número, diz a se é um número da sorte. Lembre-se de que o número deve obedecer às três condições mencionadas. Seu desafio adicional será: NÃO use o if.
// function eNumeroDaSorte(numero) {
//    return numero > 0 && (numero % 3 == 0 || numero % 2 == 0) && numero != 15
// }

// console.log(eNumeroDaSorte(2));


//Defina a função possoIrAoBanco que, receba dois parâmetros, o primeiro é diaDaSemana (string) e o segundo horaAtual(numero), a função deve retornar true, apenas se o banco estiver aberto.

// var domingo = "domingo";
// var sabado = "sábado";
// function possoIrAoBanco(diaDaSemana, horaAtual) {
//    return diaDaSemana != domingo && diaDaSemana != sabado && (horaAtual >= 9 && horaAtual <= 15); //entre
// }

// console.log(possoIrAoBanco("segunda", 8));

//Defina a função filosofoHipster que recebe como parâmetro: a profissão de uma pessoa (string), nacionalidade (string) e o número de quilômetros que ele anda por dia (número). Com esses parâmetros avalie se essa pessoa é ou não (true / false), um filósofo Hipster. Tenha em mente que um filósofo Hipster é um Músico, nascido no Brasil e que gosta de andar mais de 2 quilômetros por dia.
// var pais = "Brasil";
// var tipoProfissao = "Músico";

// function filosofoHipster(profissao, nacionalidade, numKm) {
//     return profissao == tipoProfissao && nacionalidade == pais && numKm > 2
// }

// console.log(filosofoHipster('Músico', 'Brasil', 88));

/*
Agora é a sua vez de criar as funções: temAMesmaMae que tem dois filhos por parâmetro e retornará true oufalse se eles realmente compartilharem a mesma mãe.
 Sabendo disso você pode usar a função que nós lhe damos maeDe.
temOMesmoPai que como o anterior, pega dois filhos por parâmetro e retorne true oufalse se eles compartilharem o mesmo pai.
 Sabendo disso você pode usar a função que nós lhe damos paiDe.
E saoMeioIrmaos, que, recebendo dois filhos por parâmetro, nos diga se de fato são meio-irmãos. Você deve usar as duas funções anteriores aqui.
 Lembre-se que os meios irmãos são dados quando, dois filhos compartilham a mesma mãe, mas NÃO o mesmo pai ou vice-versa. Bem, se ambos têm a mesma mãe e o mesmo pai, 
 nesse caso eles seriam irmãos!
*/

// function temAMesmaMae(filho1, filho2) {
//     return maeDe(filho1) === maeDe(filho2);
// }
// function temOMesmoPai(filho1, filho2) {
//     return paiDe(filho1) === paiDe(filho2);
// }
// function saoMeioIrmaos(filho1, filho2) {
//     return temAMesmaMae(filho1, filho2) !== temOMesmoPai(filho1, filho2);
// }

//Vamos ver se você entendeu: Defina a função xor, que pega dois valores booleanos como parâmetro e retorna o valor correspondente de acordo com a tabela. DICA: é mais simples do que você pensa, você pode resolvê-lo na mesma linha do return e talvez você tenha que usar o símbolo de negação !.

// function xor(elementA, elementB) {

//     return (elementA || elementB) && !(elementA && elementB)
// }

///////////////////////////////////////////

// function pagarComCartao
// (temJuros, taxasDoCartao, dinheiroDisponivel) {
//   return (!temJuros && taxasDoCartao >= 3) || dinheiroDisponivel < 100;
// }
/* 
Teste no console os seguintes exemplos e veja o resultado:

 pagarComCartao(true, 6, 320)
 pagarComCartao(false, 8, 80)
 pagarComCartao(true, 2, 215)
 pagarComCartao(true, 1, 32)
 */
// ///////////////////////////////////////////////////////
// var feminino = 'F';
// var masculino ='M';

// function podeSeAposentar(idade, sexo, anosContribuicao) {
//    return ((idade >= 60 && sexo == feminino) || (idade >= 65 && sexo == masculino)) && anosContribuicao >= 30
// }

// console.log(podeSeAposentar(60, "F", 30))

/* 
function podeSeAposentar(idade, sexo, anosContribuicoes) {
  return cumpreIdadeMinima(idade, sexo) && temContribuicaoSuficiente(anosContribuicao);
}*/

//Defina a função podeSubir, recebendo 3 parâmetros: alturaPessoa (numero), vemComCompania (booleano), temProblemaCardiaco (booleano), retorne true ou false conforme o caso.
// Levar em conta as condições necessárias mencionadas acima.

// function podeSubir (alturaPessoa, vemComCompania, temProblemaCardiaco) {
//   return (alturaPessoa >= 1.5 || (alturaPessoa >= 1.2 && vemComCompania)) && !temProblemaCardiaco
// }

// console.log(podeSubir(1.2, true, true))
// var ouro = 1;
// var prata = 2;
// var bronze = 3;
// function medalhaSegundoOPosto(posto) {
//     if (posto === ouro) {
//         return 'ouro';
//     }
//     else if (posto === prata) {
//         return 'prata';
//     }
//     else if (posto === bronze) {
//         return 'bronze';
//     }
//     else if (posto > 3 || posto === 0) {
//         return 'Continue participando'
//     }
// }
// console.log(medalhaSegundoOPosto(0));

// function imprimirAzul4() {
//     for (var i = 0; i < 4; i++) {
//         console.log("Azul")
//     }

// }
// imprimirAzul4()

// function imprimir5vezes5() {
//     for (var i = 0; i < 5; i++) {
//         console.log('5')
//     }

// }
// imprimir5vezes5()

// //Sabendo disso, escreva uma função passoAPasso, que imprime 5 vezes o conteúdo de i. Por exemplo:
// //Faça um console.log(valor) para cada iteração.
// function passoAPasso() {
//     for (var i = 0; i < 5; i++) {
//         console.log(i)
//     }
// }
// passoAPasso()

//Execute uma função chamada passandoPor que imprime no console "aqui eu tenho o valor de x" onde x será o valor de i em cada iteração, para cada valor de 0 a 3.
// function passandoPor() {
//     for (var i = 0; i < 4; i++) {
//         console.log('Aqui eu tenho o valor de ' + i)
//     }
// }
// passandoPor()

//Execute uma função chamada passandoPelosPares() que mostra pelo console aqui eu tenho o valor de x para cada valor PAR que percorra i de 0 até e inclusive 6.
// function passandoPelosPares() {
//     for (var i = 0; i <= 6; i++) {
//         if (i % 2 === 0) {
//         console.log('aqui eu tenho o valor de ' + i)
//         }
//     }
// }
// passandoPelosPares()
////////////////////////////////////////////////////////////

// for (var i = 0; i < 4; i++) {
//     //Aqui eu coloco as instruções que quero repetir
// }
// //Para que o for seja dinâmico, ao invés de repetir fixamente 4 vezes, pode dizer que irá repetir x vezes
// var x = 4
// for (var i = 0; i < x; i++) {
//     //Aqui eu coloco as instruções que quero repetir
// }
// //Uma maneira de obter esse valor seria se você passasse para nós como um parâmetro de uma função e dentro dela, usá-lo.
// function repetirAlgoXVezes(quantidadeDeVezes) {
//     for (var i = 0; i < quantidadeDeVezes; i++) {
//         //Aqui dentro escrevo as instruções que quero repetir
//     }
// }

// //Sabendo isso, escreva uma função imprimirAzul que receba como parâmetro um valor numérico “x” e imprima “Azul” “x” vezes. Por exemplo
// function imprimirAzul(quantidadeDeVezes) {
//     for (var i = 0; i < quantidadeDeVezes; i++) {
//         console.log('Azul')
//     }
// }
// imprimirAzul(5)

// //Se quiséssemos contar quantas calorias temos em 3 coxinhas e cada coxinha tem 300 calorias,
// // poderíamos fazer duas coisas, uma seria multiplicar e outra seria adicionar 3 vezes 300 calorias.
// for(var i = 0; i < 3; i++) {
//     var totalCalorias = totalCalorias + 300;
//  }
//  console.log(totalCalorias) 
// //a variavel totalCalorias aqui já não existe e não pode ser consul-tada

// //Isso está relacionado à existência das variáveis, a variável totalCalorias é local para for e, portanto, só podemos usá-la e é redefinida para cada iteração.
// // Se quisermos manter o valor fora de cada iteração, devemos fazer com que essa variável seja global para o for. 
// //Conseguimos isso de maneira simples, declarando a variável totalCalorias fora do for.
// var totalCalorias = 0; 
// //Aqui eu aproveito e inicializo em 0 a variável totalCalorias.
// for(var i = 0; i < 5; i++) {
//   totalCalorias = totalCalorias + 300; 
//   //aqui a variável, como já está declarada fora do for, pode ser modificada durante as iterações e não irá "reiniciar"
// }
// console.log(totalCalorias) 
// //a variável totalCalorias já existe e retorna o valor total que estávamos procurando.
/////////////////////////////////////////////////////////////////////////////////


// //Sabendo disso, escreva uma função somar5MoedasDe25Centavos, que adiciona o valor de 5 moedas de 0,25 centavos e retorna o resultado.
// var totalMoedas = 0

// function somar5MoedasDe25Centavos() {
//     for (var i = 0; i < 5; i++) {
//        totalMoedas = totalMoedas + 0.25;
//     }
//     return totalMoedas
// }
// console.log(somar5MoedasDe25Centavos())

// //Sabendo disso, escreva uma função somarMoedasDe25(quantidadeDeMoedas), que toma como parâmetro um valor numérico e retorna a soma das moedas de 25 centavos. Por exemplo:

// function somarMoedasDe25(quantidade) {
//     var totalMoedas = 0
//     for (var i = 0; i < quantidade; i++) {
//        totalMoedas = totalMoedas + 0.25;
//     }
//     return totalMoedas
// }
// console.log(somarMoedasDe25(5))


// function caloriasDeCoxinhas(quantidadeDeCoxinhas){
//     var totalCalorias = 0;  

//     for(var i = 0; i < quantidadeDeCoxinhas; i++) {
//       totalCalorias = totalCalorias + 300;
//     }

//     return totalCalorias;
//   }
//   console.log(caloriasDeCoxinhas(3))
////////////////////////////////////////////////////////
// //Defina a função somaDosPares(x) que retorna a soma total de todos os números que são pares, ou seja, divisíveis por 2 obtendo resto 0. Desta forma: 0 + 2 + 4 + 6 + 8 + 10 + ..... X
// function somaDosPares(x) {
//     var soma = 0;
//     for (var i = 0; i <= x; i+=2) {
//         // if (i % 2 === 0) {
//            soma = soma + i  
//         // }
//     }
//     return soma  
// }
// console.log(somaDosPares(8))

// //Defina a função chamada somatoria, que receba como parâmetro um número e retorne a soma dos números antecessores a ele. 
// // Por exemplo: somatoria(4) = 6 A função executa isso através do for 0+1+2+3

//  function somatoria(numero) {
//         var soma = 0;
//         for (var i = 0; i < numero; i++) {
//                soma = soma + i  
//         }
//         return soma  
//     }
//     console.log(somatoria(4))

//Sabendo isso, crie uma função chamada caloriasDeTrote(), que recebe por parâmetro o número de voltas representado por um valor numérico e retorne a quantidade de calorias que será consumida.
// Por exemplo: aloriasDeTrote(2) Deveria devolver 15 onde 5 calorias são da primeira volta (5 * 1) mais 10 calorias da segunda (5 * 2).

// function caloriasDeTrote(numeroVoltas) {
//     var acumulador = 0;
//     for (var i = 1; i <= numeroVoltas; i++) {
//         var caloriaPorVolta = i * 5;
//         acumulador = acumulador + caloriaPorVolta
//     }
//     return acumulador
// }
// console.log(caloriasDeTrote(2))

/////////////////////////////////////////////////////////////
//podemos também adicionar elementos a qualquer momento, o que resolvemos usando o método push. 
/* 
var pertences = ["espada", "escudo", "tocha"];
//pertences.length aqui vale 3;

pertences.push ("amuleto mágico");
//agora pertences.length vale 4
*/
// //Crie uma variável do tipo array chamada pertences que contém as strings "espada","escudo","crossbow".
// //Utilize o método push para adicionar a string "cross".
// //Ah e, além disso, existe um método “pop”, que não possui parâmetros. Escreva “pertences.pop()” e investigue o que faz no console.
// var pertences = ["espada", "escudo","crossbow"];
// pertences.push("cross");

// console.log(pertences)
// console.log(pertences.pop()) //remove o ultimo array
// console.log(pertences)

// //Declarar uma função chamada “mover”, que recebe dois arrays, remove o último elemento do primeiro e adiciona-o ao segundo.

// var umArray = [1, 2, 3];
// var outroArray = [4, 5];
// function mover(umArray, outroArray) {
//  var trocarElemento = umArray.pop();
//  outroArray.push(trocarElemento)
// return [umArray, outroArray]
// }

// console.log(mover(umArray, outroArray))

// var diasDeTrabalho = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"]
// var umDia = diasDeTrabalho.indexOf ("osvaldo"); 

// console.log(umDia)
// //Escreva função “contem” que nos diz se um array contém um determinado elemento.

// function contem(array, element) { 
//   for (var i = 0; i < array.length -1; i++) {
//     if (array == undefined || element == undefined) {
//       return false
//     }
//     if (array.indexOf(element) == -1 ) {
//       return false

//   } else {
//     return true
//   }
//   }
// }

///////Nao precisa de if ou for>>>>
function contem(array, numero) { 
 
    return array.indexOf(numero) != -1;
      }
   console.log( contem([1,6,5], 6))  

//////////////////////////////// com if
// function contem(array, element) {
//   for (var i = 0; i < array.length -1; i++) {
//     if (array.indexOf(element) == -1 ) {
//       return false
//   } else {
//     return true
//   }

// }
// }
// ///////////////////////sem if
// function contem(array, element) {

//   for (var i = 0; i < array.length -1; i++) {
//     return !(array.indexOf(element) == -1);
//   }

// }
// console.log(contem([5,6,7,6],88))

////////////////////////////
/*Se você prestar atenção nos exemplos de consulta, você deve ter notado que os arrays também podem ter elementos duplicados: [1, 2, 1], [" hello "," hello "], etc.

Portanto, “indexOf” retorna a posição da primeira aparição do elemento na matriz. Por exemplo:

2  [2, 3, 3, 4] .indexOf (3)
1 // retorna 1 porque embora esteja também na posição 2, aparece primeiro na posição 1.
*/

/*
["esse", "cachorro", "tem", "a", "cauda", "peluda"][1]
"cachorro"
Se você pedir por um elemento em uma posição que seja igual ou maior que o tamanho da matriz, você receberá undefined. Não parece uma coisa terrível, 
mas o problema é que com algo indefinido você não pode fazer nada realmente útil.
*/
// var medalhas = ['nada', 'ouro', 'prata', 'bronze']

// function medalhaDeAcordoComPosto(numero) {
//   for (var i = 0; i < medalhas.length; i++) {
//     if (numero == i) {
//       return medalhas[i];
//     }
//   }
//   return 'nada'


// }
// console.log(medalhaDeAcordoComPosto(1))
///////////////////////////////////////////////////////////////

// function lucroTotal0(umPeriodo) {
//   var soma = 0;
//   return soma;
// }
// //E se eu tivesse exatamente um item? Este ... 0 .... mais esse elemento?
// function lucroTotal1(umPeriodo) {
//   var soma = 0;
//   soma = soma + umPeriodo[0];
//   return soma;
// }
// //E se eu tivesse 2 elementos?
// function lucroTotal2(umPeriodo) {
//   var soma = 0;
//   soma = soma + umPeriodo[0];
//   soma = soma + umPeriodo[1];
//   return soma ;
// }
// //E se eu tivesse 3 elementos?
// function lucroTotal3(umPeriodo) {
//   var soma = 0;
//   soma = soma + umPeriodo[0];
//   soma = soma + umPeriodo[1];
//   soma = soma + umPeriodo[2];
//   return soma ;
// }
// //E se a array tivesse N elementos?
// function lucroTotalN(umPeriodo) {
//   var soma = 0; // isso é sempre
//   //... etc
//   return sumatoria; //isso é sempre
// }
// //E como posso pedir que ele repita essa ação dinamicamente para todos os elementos?
// //Perguntando o length para o array!

// function lucroTotal(umPeriodo) {
//   var soma= 0;
//   var mes = 0;
//   for (var i=0; i<umPeriodo.length; i++) {
//     mes = umPeriodo[i];
//     soma= soma+ mes;
//   }
//   return soma;
// }
// /*
// exemplos de respostas 
// lucroTotal([])
// lucroTotal([100])
// lucroTotal([100, 2])
// lucroTotal([2, 10, -20])
// lucroTotal([2, 10, -20, 0, 0, 10, 10])
// */

// //Eu quero saber em quantos meses houve lucro, ou seja, o saldo foi maior que zero".
// function quantidadeDeMesesComLucro(umPeriodo) {
//   let quantidade= 0;
//   for (let mes=0; mes < umPeriodo.length; mes++) {
//     if (umPeriodo[mes] > 0) {
//       quantidade += 1
//     } 
//   }
//   return quantidade;
// }

// //Ana, vendo que somos tão produtivos, nos perguntou algo mais: agora ela quer saber quantos meses de um período houve perda.
// function quantidadeDeMesesComPerda(umPeriodo) {
//   let quantidade= 0;
//   for (let mes=0; mes < umPeriodo.length; mes++) {
//     if (umPeriodo[mes] < 0) {
//       quantidade += 1
//     } 
//   }
//   return quantidade;
// }

//Bem na hora! , Ana nos deixou com um problema mais interessante: quer saber o saldo dos meses com lucro .

// function saldoDeMesesComLucro(umPeriodo) {
//  var novoArray = []
//   for (let mes=0; mes < umPeriodo.length; mes++) {
//         if (umPeriodo[mes] > 0) {
//          novoArray.push(umPeriodo[mes])
//         } 
//       }
//       return novoArray;
//     }

// console.log(saldoDeMesesComLucro([30, 20, -25, 80, -70, 2]))

// // //Queremos escrever uma função naipeDeTruco, que dado um naipe, devolva uma lista de strings, 
// // //uma por cada carta desse naipe seguindo as cartas do truco: Lembre-se! As cartas incluem todos os números, com exceção das cartas 8 e 9

// function naipeDeTruco(naipe) {
//   var cartas = [];
//   for (var num = 1; num <= 12; num++) {
//     if (num == 8) {
//       num = num + 1;
//     } else {
//       cartas.push(num + " de " + naipe);
//     }
//   }
//   return cartas;
// }
// console.log(naipeDeTruco('ouro'))

// //Necessitamos uma função produto que receba um array de números e retorne o produto: o resultado de multiplicar todos os elementos entre si.
// function produto(num) {
//   var acumulador = 1;
//   for (var i = 0; i < num.length; i++) {
//     acumulador *= num[i];
//   }
//   return acumulador
// }

// console.log(produto([5, 4, 7]))

/*
Necessitamos uma função maisMenos que receba um array e retorne outro com os seguintes três números:

na primeira posição, a fração de números que são positivos
na segunda posição, a fração de números que são zero
na última posição, a fração de números que são negativos
*/

function maisMenos(num) {
  var novoArray = [] // pq quando coloquei o array acima da funcao dava erro 
  var quantidadePositivos = 0;
  var quantidadeZeros = 0;
  var quantidadeNegativos= 0;
  for (var i = 0; i < num.length; i++) {
    if (num[i] > 0) {
   quantidadePositivos += 1;
      }
      else if (num[i] === 0) {
    quantidadeZeros += 1;
      }
      else if (num[i] < 0) {
     quantidadeNegativos += 1;
    }
  }
  quantidadePositivos /= num.length
  quantidadeZeros /= num.length
  quantidadeNegativos /= num.length
  novoArray.push(quantidadePositivos, quantidadeZeros, quantidadeNegativos)
  return num = novoArray
}
console.log(maisMenos([0, 0, 0, 0, -2, -3, -4, -5]))

// //
// function escada(altura){
//   let array = [];
//   for(let i = 1; i <= altura; i++){
//     let espaco = altura - i;
//     array.push(" ".repeat(espaco) + "#".repeat(i));
//   }
//   return array;
// }
