const container = document.getElementById("alunos-container");

const carregarAlunos = async () => {

try{

const resposta = await fetch("https://jsonplaceholder.typicode.com/users");

const alunos = await resposta.json();

alunos.forEach(aluno => {

const card = document.createElement("div");

card.classList.add("card");

card.innerHTML = `
<h2>${aluno.name}</h2>
<p><strong>Email:</strong> ${aluno.email}</p>
<p><strong>Empresa:</strong> ${aluno.company.name}</p>
`;

container.appendChild(card);

});

}

catch(erro){

console.error("Erro ao carregar alunos:", erro);

container.innerHTML = "<p>Erro ao carregar os alunos.</p>";

}

};

carregarAlunos();
