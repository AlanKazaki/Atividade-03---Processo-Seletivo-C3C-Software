function calcNota(nota) {
    let aux = nota;
    let divisor = 1;
    
    while(aux > 5) {
        aux = aux - 5;
        divisor++;
    }
    
    if(nota % 5 < 3 && nota < 38) {
        divisor++;
        nota = divisor * 5;
    }
    
    if(nota >= 40) {
        return 'Aprovado com nota ' + nota;
    } else {
        return 'Reprovado';
    }
}

