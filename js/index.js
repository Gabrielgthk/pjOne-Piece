/*
OBJETIVO 1 - quando clicar no botão do personagem na lista,
marcar o botão como 'selecionado';
      passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles.
      passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou.
      passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele.

      OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do mesmo;
      passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele.
      passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou 
      passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele.
*/
//OBJETIVO 1
//passo 1

const botoes = document.querySelectorAll('.botao');

//OBJETIVO 2
//passo 1

const personagens = document.querySelectorAll(".personagem")

//OBJETIVO 1
//passo 2 e passo 3

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado")
        botao.classList.add("selecionado");
        
        //OBJETIVO 2
        //passo 3
        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");

        //OBJETIVO 2
        //passo 2
        personagens[indice].classList.add("selecionado")
    });
});