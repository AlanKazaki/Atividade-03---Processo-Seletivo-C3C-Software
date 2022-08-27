 function bhaskara(a, b, c) {
    let raizes = [];
    let delta = (b * -1) + (4 * a * c);

    if (delta < 0) {
        return 'Delta e negativo';
    } else {
        let raiz1 = (b * -1) * Math.sqrt(delta) / 2 * a;
        let raiz2 = (b * -1) * (Math.sqrt(delta) * -1) / 2 * a; 
        raizes.push(raiz1);
        raizes.push(raiz2);
        return raizes;
    }
s}