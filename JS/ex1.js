let input1 = prompt('Insira o primeiro lado do triangulo: ');
let input2 = prompt('Insira o segundo lado do triangulo: ');
let input3 = prompt('Insira o terceiro lado do triangulo: ');
let triangulo;

if (input1 != input2 && input1 != input3 && input2 != input3) {
    triangulo = 'Isosceles'
} else if (input1 == input2 && input1 == input3) {
    triangulo = 'Equilatero'
} else {
    triangulo = 'Escaleno'
}

alert('O triangulo é ' + triangulo);    
return triangulo;




