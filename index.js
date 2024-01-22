// Classe para representar um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para realizar o ataque
    atacar() {
        let ataque;

        // Determina o tipo de ataque com base no tipo do herói
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque desconhecido';
        }

        // Exibe a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando um herói de exemplo
const meuHeroi1 = new Heroi('Herói Exemplo', 25, 'mago');
const meuHeroi2 = new Heroi('Herói Exemplo', 16, 'guerreiro');

// Realizando o ataque
meuHeroi1.atacar();
meuHeroi2.atacar();
