const SHA256 = require('crypto-js/sha256');

class Block {
    // index = Posicion del bloque en la cadena.
    // data = Define el contenido del bloque en la cadena.
    // previousHash = Equivale al valor de bloque anterior de la cadena encriptado.
    // date = Fecha de la creacion del bloque.
    // hash = Validacion como cadena valida.
    // nounce = Numero aleatorio de la cadena de bloques.

    constructor(index, data, previousHash = ''){
        this.index = index;
        this.data = data;
        this.previousHash = previousHash;
        this.nounce = 0;
        this.hash = this.createdHash();
    }

    createdHash(){
        const originalChain = `${this.index}|${this.data}|${this.date}|${this.nounce}`;
        return SHA256(originalChain).toString();
    }

    mine(dif){
        while(!this.hash.startsWith(dif)){
            this.nounce ++;
            this.hash = this.createdHash();
        }
    }

}

module.exports = Block;