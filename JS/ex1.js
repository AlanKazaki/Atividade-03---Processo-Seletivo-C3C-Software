function calcTriangulo(input1, input2, input3) {
    let triangulo;

    if (input1 != input2 && input1 != input3 && input2 != input3) {
        triangulo = 'Isosceles'
    } else if (input1 == input2 && input1 == input3) {
        triangulo = 'Equilatero'
    } else {
        triangulo = 'Escaleno'
    }
 
    return triangulo;
}

