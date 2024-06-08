
/*
# 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

var vitorias = 101
var derrotas = 33

const nomeDoNivel = ["Ferro","Bronze","Prata","Ouro","Diamante","Lendário","Imortal"];
const limiteSup = [10,20,50,80,90,100];


function classificar(vitorias,derrotas){
    var saldoVitorias = vitorias-derrotas
    // no mínimo o eroi será de ferro
    var nivelDoHeroi=nomeDoNivel[0]
    var i=0

    //comparamos com outros nivéis
    while (saldoVitorias > limiteSup[i]) {
        nivelDoHeroi = nomeDoNivel[i+1];
        i++
    }
    console.log("O Herói tem de saldo de **{"+saldoVitorias+"}** está no nível de **{"+nivelDoHeroi+"}**")
}

classificar(vitorias,derrotas);
