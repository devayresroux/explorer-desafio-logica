let alunos = [
  {
    nome: "João",
    nota1: 6.0,
    nota2: 3.5,
  },
  {
    nome: "Maria",
    nota1: 8.0,
    nota2: 7.5,
  },
];

function media(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

for (aluno of alunos) {
  let mediaAluno = media(aluno.nota1, aluno.nota2);
  let estaAprovado =
    mediaAluno >= 7
      ? "Parabéns você foi aprovado(a)"
      : "Que pena não foi dessa vez.";

  alert(`A média do aluno(a) ${aluno.nome} é ${mediaAluno}. ${estaAprovado}`);
}
