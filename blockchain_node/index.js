const Blockchain = require('./blockchain');

const blockchain = new Blockchain("Hola a mi cadena de bloques", "0");
blockchain.addBlock("Datos del segundo bloque");
blockchain.addBlock("Datos del tercer bloque");

console.log(blockchain);