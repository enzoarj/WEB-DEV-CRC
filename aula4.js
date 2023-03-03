/*let cores = ['azul', 'amarelo', 'rosa'];

for(let i in cores)
{
    console.log(cores[i]);
}

for(let cor of cores)
{
    console.log(cor);
}
*/

/*EX 1
let  worms = {};

condicao = Object.values(worms);

if(condicao == 0)
{
    console.log(`Objeto vazio.`);
}

else
{
    console.log(`${worms.nome}`);
}
*/

/*EX 2
let soma = 0;

let ListaDeCompras = {
    graodebico: 2.5,
    arroz: 5.65,
    azeite: 7.5
};

let lista = Object.values(ListaDeCompras);

for(let i in lista)
{
    soma += lista[i];
}
console.log(`Total: ${soma.toFixed(2)}`);
*/

/*EX 3

const musicas = {
    'Maggots': 8,
    'Worms': 0,
    'You Make Me Sick': 7
};

for(let[musica, nota] of Object.entries(musicas))
{
    if(nota == 0)
    {
        console.log(`${musica} está sem nota`);
    }
    else 
    {
        console.log("\n");
    }
}
*/
//EX 4

let lista =
{
    nomes: ['Julia', 'Vitoria', 'Joao']
};

let nomes = Object.values(lista.nomes);
let maiorNome = 0;

for(let i in nomes)
{ 
    if(nomes[i].length > maiorNome) 
    {
        maiorNome = nomes[i];

    }
}
console.log(`Maior nome: ${maiorNome}`);

