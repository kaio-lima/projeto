let botao1 = document.querySelector(".botao1");
let botao2 = document.querySelector(".botao2");

function baixarApp(){
    alert("Nosso App ainda não está disponivel para download, Aguarde!!!");
}
botao1.onclick = baixarApp;

function cadastro(){
 
    let nomeCompleto = prompt("Digite seu nome completo");
    let email = prompt("Digite seu Email");
    let senha = prompt("digite sua senha");
    let confirmacaoSenha = prompt("Confirme sua senha");
    
    if (email==""){
        alert("Suas foram invalidas, tente novamente!!");
    }
    else{
        alert("Cadastro com sucesso, acesse pelo nosso App");
    }
} 

botao2.onclick = cadastro;