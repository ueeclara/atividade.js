// Array para armazenar os contatos
var contatos = [];


function adicionarContato() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;


    // Verifica se os campos foram preenchidos
    if(name && phone) {
        var contato = {
        nome: name,
        telefone: phone
        };


        contatos.push(contato);
        exibirContatos();
    }


    // Limpa os campos após adicionar o contato
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
}


function buscarContato() {
    var searchName = document.getElementById("searchName").value;


    var contato = contatos.find(function(item) {
    // Procura pelo contato com o nome especificado
    return item.nome === searchName;
});


    if(contato){
        alert("Nome: " + contato.nome + "\nTelefone: " + contato.telefone);
    }else {
        alert("Nome não encontrado.");
    }


    // Limpa o campo de busca
    document.getElementById("searchName").value = "";
}


function exibirContatos() {
    var contactList = document.getElementById("contactList");
    contactList.innerHTML = "";


    // Exibe todos os contatos na lista
    contatos.forEach(function(item) {
        var li = document.createElement("li");
        li.textContent = "Nome: " + item.nome + ", Telefone: " + item.telefone;
        contactList.appendChild(li);
});
}


function removerContato() {
    var removeName = document.getElementById("removeName").value


    for(var i =0; i< contatos.length; i++) {
        if(contatos[i].nome === removeName){
            contatos.splice(i, 1) // remove o contato do array
            break
        }
    }
    exibirContatos();
}


function atualizarContato() {
    var updateName = document.getElementById("updateName").value;
    var updatePhone = document.getElementById("updatePhone").value;


    var contato = contatos.find(function(item) {
        return item.telefone === updatePhone;
    });


    if (contato) {
        contato.nome = updateName;
        contato.telefone = updatePhone;
        exibirContatos();
    }


    document.getElementById("updateName").value = "";
    document.getElementById("updatePhone").value = "";
}




function prepararAtualizacao(numero) {
    var contato = contatos.find(function(item) {
        return item.telefone === numero;
    });


    if (contato) {
        document.getElementById("updateName").value = contato.nome;
        document.getElementById("updatePhone").value = contato.telefone;
        atualizarContato(contato);
    }
}
