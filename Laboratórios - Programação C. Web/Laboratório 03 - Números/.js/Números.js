const add = (a,b) => a+b;


const addfuncao=()=>{
    const input1 = document.querySelector(".add1");
    const input2 = document.querySelector(".add2");
    const h1 = document.querySelector(".add");
    h1.innerHTML = add(parseInt(input1.value,10),parseInt(input2.value,10));
};
const bigest = (a, b) => (a > b ? 'maior' : 'menor')

const bigestfuncao=()=>{
    const input1 = document.querySelector(".bigest1");
    const input2 = document.querySelector(".bigest2");
    const h1 = document.querySelector(".bigest"); 
    h1.innerHTML= `O numero ${input1.value} é ${bigest(
         parseInt(input1.value,10),
         parseInt(input2.value,10)
          )} que o numero ${input2.value}.`;

    };
    const primo= n =>{
        for (let i=2;i<n;i++){
            if(n%i == 0)return false;
        }
        return true;
    };

    const primofuncao = ()=>{
        const input1 = document.querySelector(".primo1");
        const h1 = document.querySelector(".primo");
        h1.innerHTML = primo(parseInt(input1.value,10))? "É primo" : "Não é primo";
    };
    const hi= (a,b) => Math.sqrt(a*a+b*b);

    const hifuncao =()=>{
        const input1= document.querySelector(".hi1");
        const input2= document.querySelector(".hi2");
        const h1 = document.querySelector(".hi");
        h1.innerHTML= hi(parseInt(input1.value,10),parseInt(input2.value,10));
        
    };
    const salario=(s,p) => s+s*(p/100);

    const salariofuncao=()=>{
        const input1=document.querySelector(".salario1");
        const input2=document.querySelector(".salario2");
        const h1=document.querySelector(".salario");
        h1.innerHTML= salario(
            parseInt(input1.value,10),
            parseInt(input2.value,10)
        );
    };

    const graus=f=>((f-32)/9)*5;

    const grausfuncao=()=>{
        const input1=document.querySelector(".graus1");
        const h1=document.querySelector(".grauscelcius");
        h1.innerHTML= graus(parseInt(input1.value,10));
    };

    const media=(n1,n2,n3)=>(n1*2+n2*3+n3*5)/10;

    const mediafuncao=()=>{
        const input1=document.querySelector(".nota1");
        const input2=document.querySelector(".nota2");
        const input3=document.querySelector(".nota3");
        const h1=document.querySelector(".nota");
         h1.innerHTML= media(parseInt(input1.value,10),parseInt(input2.value,10),parseInt(input3.value,10));
        };