const Listapecas = ['pecas teste', 'AB', 'peca B'];
console.log('quantidade de caracteres');

if (Listapecas.length <= 10) {

    console.log('as pecas pode ser cadastradas');
}
for (let index = 0; index < Listapecas.lenght; index++) {
    const pecaatual = Listapecas[index];
    if (pecaatual.length < 3) {
        console.log(pecaatual + ':a peca possui nome inferior a 3 caracteres e não pode ser cadastrada')
    } else {
        console.log(pecaatual + ': a peca pode ser cadastrada')
    }
}
console.log('pesodepeca')

const pesodepecaemgramas = 50;
if (pesodepecaemgramas >= 100){
    console.log('peso sufuciente')
}else{
console.log('valor insuficiente')
}



