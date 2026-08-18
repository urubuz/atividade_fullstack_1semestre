const formCadastro = document.getElementById("form-cadastro");

if (formCadastro) {
  formCadastro.addEventListener("submit", function (e) {
    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const nascimento = document.getElementById("nascimento").value;
    const civil = document.getElementById("civil").value.trim();

    if (!nome || !sobrenome || !nascimento || !civil) {
      e.preventDefault();
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const confirmar = confirm(
      `Cadastrar usuário:\n${nome} ${sobrenome}\nNascimento: ${nascimento}\nEstado civil: ${civil}`
    );

    if (!confirmar) {
      e.preventDefault();
    }
  });
}
