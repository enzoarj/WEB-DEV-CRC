/*let eu = 
{
    nome: 'Julia',
    idade: 18,
    pais: "Brasil",
    lings: ["C", "Javascript"],
    caracteristicas:
    {
        olhos : "Pretos",
        cabelo : "ondulado"
    }
} 
console.log(eu);
eu.nome = 'Joao';
eu.caracteristicas.cabelo = 'Liso';
console.log()
*/

/*Ex 1 - tabuada de 10

const n = 10;
for(let i = 0; i <= 10; i++)
{
    console.log(`${i} x ${n} = ${n*i}`);
}
*/

/*Ex 2 - media do array 3 valores 
let val = [5.6, 10, 9];
let media;

media = (val[0] + val[1] + val[2])/val.length;
console.log(`A média é ${media.toFixed(1)}`);

Com for 
let val = [5.6, 7, 8, 10, 9];
let media = 0;

 for(let i = 0; i < val.length; i++)
    media += val[i]/val.length;
 
    console.log(`A média é ${media.toFixed(1)}`);

Sol helo
let val = Array()
val.push(5);
val.push(10);
val.push(8);

let media = (val[0] + val[1] + val[2])/val.length;
console.log(`Média = ${Math.ceil(media)}`);
*/

/*Ex 3 objeto filme

let letterboxd = {
    filme: "Hereditário",
    nota: 10,
    genero: ["Terror psicológico", " Suspense"]
}
    console.log(`Nome do filme: ${letterboxd.filme} \nNota: ${letterboxd.nota} \nGênero: ${letterboxd.genero}`);
    */

//Ex 4 - array com slice
let words = ["Garfo", "Viola", "Pib"];
let a = words.slice()[0][4];
let b = words.slice()[1][4];
let c = words.slice()[2][2];
console.log(`Array: ${words}`);
console.log(`${a} \n${b} \n${c}`);

