var btnAdicionar = document.querySelector("#button");

buttonAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#adicionaProdutoNaLista");
    var itemDaLista = obtemItemDoFormulario(form);

    var erros = validaItem(itemDaLista);

    if(erros.length === 0){
        adicionaItem(itemDaLista);
    }

    form.reset();
    var mensagensErro = document.querySelectorAll("span");
    mensagensErro.innerHTML = " ";
        
});

function adicionaItem(itemDaLista) { 
    var itemTr = montaTr(itemDaLista);
    var lista = document.querySelector("#tabelaLista");
    lista.appendChild(itemTr);
}

function obtemItemDoFormulario(form){ //criando uma array
    var itemDaLista = {
        // captura o valor inserido no input(campo)
        nomeProduto: form.inputProduto.value,
        valorProduto: form.inputValor.value,
        quantidadeProduto: form.inputQuantidade.value,
    }
    //retornando o array
    return itemDaLista;
}

function montaTd(dado){
    var td = document.createElement("td");
    td.textContent = dado;
    return td;
}

function montaTr(itemDaLista){
    var itemDaListaTr = document.createElement("tr");
    itemDaListaTr.appendChild(montaTd(itemDaLista.nomeProduto));
    itemDaListaTr.appendChild(montaTd(itemDaLista.valorProduto));
    itemDaListaTr.appendChild(montaTd(itemDaLista.quantidadeProduto));
    return itemDaListaTr;
}

function validaItem(itemDaLista){

    erros = [];

    if(itemDaLista.nomeProduto.length === 0){
        var nomeErro = document.querySelector("#nome_erro");
        nomeErro.textContent = ("Adicione o nome do produto.");
        erros.push(nomeErro);
    }

    if(itemDaLista.valorProduto.length === 0){
        var valorErro = document.querySelector("#valor_erro");
        valorErro.textContent = ("Adicione o valor do produto");
        erros.push(valorErro);
    }

    if(itemDaLista.quantidadeProduto.length === 0){
        var quantidadeErro = document.querySelector("#quantidade_erro");
        quantidadeErro.textContent = ("Adicione a quantidade do produto");
        erros.push(quantidadeErro);
    }
    console.log(erros);
    return erros;

    
}