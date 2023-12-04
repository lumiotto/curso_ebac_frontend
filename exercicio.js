const alunosENotas = [
    {
        nome: 'Alice',
        nota: 7
    },
    {
        nome: 'Bruno',
        nota: 5
    },
    {
        nome: 'Carla',
        nota: 8
    },
    {
        nome: 'David',
        nota: 3
    },
    {
        nome: 'Eva',
        nota: 9
    },
    {
        nome: 'Fabiana',
        nota: 6
    },
    {
        nome: 'Gustavo',
        nota: 4
    }
];

function filtrarAlunosAprovados(aluno) {
    return aluno.nota >= 6;
}

const listaDeAlunosAprovados = alunosENotas.filter(filtrarAlunosAprovados);
console.log('Lista de alunos aprovados: ', listaDeAlunosAprovados);
