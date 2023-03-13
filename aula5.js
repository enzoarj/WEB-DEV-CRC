/*
//Ex 1 - par ou impar
function ParOuimpar(num)
{
  if(num%2 == 0)
  {
    return "O número é par!";
  }
  else
  {
    return "O número é ímpar!";
  }
 };

let num = prompt("Digite um numero: ");
  console.log(ParOuImpar(num));

//Ex 2 - soma do array

function somanum(nums)
{
  soma = 0;
  
  for(let i = 0; i < nums.length; i++)
     soma += nums[i];
      return soma;
}

console.log(somanum([2, 4, 6, 2]));


//Ex 5 - soma dos quadrados usando arrow function

const somaQuadradosPares = (arr) =>
  {
    let soma = 0;
    for(let num of arr)
      {
        if(num%2 == 0)
        {
          soma += num**2;
        }
      }
      return soma;
  }

const inp = [1, 2, 3, 4, 5, 6];
const result = somaQuadradosPares(inp);
console.log(result);
*/