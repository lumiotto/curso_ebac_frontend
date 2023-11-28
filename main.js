function Animal(especie, raca, nome, cor) {
    this.especie = especie;
    this.raca = raca;
    this.nome = nome;
    this.cor = cor;
}

function Cachorro(raca, nome, cor) {
    Animal.call(this, 'cachorro', raca, nome, cor);

    this.fazerBarulho = function() {
        console.log(`${nome} diz au au`);
    } 
}

function Gato(raca, nome, cor) {
    Animal.call(this, 'gato', raca, nome, cor)

    this.fazerBarulho = function() {
        console.log(`${nome} diz miau`);
    } 
}

const cachorro1 = new Cachorro('golden', 'Bob', 'dourado');
const cachorro2 = new Cachorro('husky siberiano', 'Luke', 'branco e cinza');
const gato1 = new Gato('persa', 'Lola', 'cinza');
const gato2 = new Gato('siamês', 'Lua', 'branca');

console.log(cachorro1);
console.log(cachorro2);
console.log(gato1);
console.log(gato2);
cachorro1.fazerBarulho();
cachorro2.fazerBarulho();
gato1.fazerBarulho();
gato2.fazerBarulho();