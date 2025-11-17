// Botões e telas
const botaoProsseguir = document.getElementById('botaoProsseguir');
const botaoRetornar = document.getElementById('botaoRetornar');

const telaAgendamento = document.getElementById('tela-agendamento');
const telaConcluido = document.getElementById('tela-concluido');

// Animação: ao clicar em "Prosseguir"
botaoProsseguir.addEventListener('click', () => {
    telaAgendamento.classList.add('sair-esquerda');
    telaConcluido.classList.add('entrar-direita', 'ativa');

    // Remove classes depois da animação (para resetar)
    setTimeout(() => {
        telaAgendamento.classList.remove('ativa', 'sair-esquerda');
        telaConcluido.classList.remove('entrar-direita');
    }, 500);
});

// Animação: ao clicar em "Retornar ao início"
botaoRetornar.addEventListener('click', () => {
    telaConcluido.classList.add('sair-direita');
    telaAgendamento.classList.add('entrar-esquerda', 'ativa');

    setTimeout(() => {
        telaConcluido.classList.remove('ativa', 'sair-direita');
        telaAgendamento.classList.remove('entrar-esquerda');
        document.querySelector('.formulario').reset(); // limpa o form
    }, 500);
});

// -------------------------
//   MÁSCARA DO CPF
// -------------------------
document.addEventListener("DOMContentLoaded", () => {

  const inputCpf = document.getElementById("cpf");
  const inputTelefone = document.getElementById("telefone");

  // -------- CPF ----------
  if (inputCpf) {
    inputCpf.addEventListener("keyup", () => {
      let v = inputCpf.value.replace(/\D/g, "");

      if (v.length > 11) v = v.slice(0, 11);

      if (v.length > 9) {
        v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
      } else if (v.length > 6) {
        v = v.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
      } else if (v.length > 3) {
        v = v.replace(/(\d{3})(\d{1,3})/, "$1.$2");
      }

      inputCpf.value = v;
    });
  }

  // -------- TELEFONE ----------
  if (inputTelefone) {
    inputTelefone.addEventListener("keyup", () => {
      let v = inputTelefone.value.replace(/\D/g, "");

      if (v.length > 11) v = v.slice(0, 11);

      if (v.length > 6) {
        v = v.replace(/(\d{2})(\d{1})(\d{4})(\d{0,4})/, "($1) $2 $3-$4");
      } else if (v.length > 3) {
        v = v.replace(/(\d{2})(\d{1})(\d{0,4})/, "($1) $2 $3");
      } else if (v.length > 1) {
        v = v.replace(/(\d{2})(\d{0,1})/, "($1) $2");
      }

      inputTelefone.value = v;
    });
  }

});


