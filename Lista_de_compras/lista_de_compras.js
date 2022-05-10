var btnAdicionar = document.querySelector("#button");

buttonAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#adicionaProdutoNaLista");
    var itemDaLista = obtemItemDoFormulario(form);

    var erros = validaItem(itemDaLista);

    if(erros.length === 0){
        adicionaItem(itemDaLista);
    }
        
});

function adicionaItem(itemDaLista) { 
    var itemTr = montaTr(itemDaLista);
    var lista = document.querySelector("#tabelaLista");
    lista.appendChild(itemTr);
}

function obtemItemDoFormulario(form){ 
    var itemDaLista = {

        nomeProduto: form.inputProduto.value,
        valorProduto: form.inputValor.value,
        quantidadeProduto: form.inputQuantidade.value,
    }
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
    var nomeErro = document.querySelector("#nome_erro");
    var valorErro = document.querySelector("#valor_erro");
    var quantidadeErro = document.querySelector("#quantidade_erro");


    if(itemDaLista.nomeProduto.length === 0){
        nomeErro.textContent = ("Adicione o nome do produto.");
        erros.push(nomeErro);
    }else{
         nomeErro.innerHTML = ("")
    }

    if(itemDaLista.valorProduto.length === 0){
        valorErro.textContent = ("Adicione o valor do produto");
        erros.push(valorErro);
    }else{
       valorErro.innerHTML = ("")
    }

    if(itemDaLista.quantidadeProduto.length === 0){
        quantidadeErro.textContent = ("Adicione a quantidade do produto");
        erros.push(quantidadeErro);
    }else{
        quantidadeErro.innerHTML = ("")
    }
    console.log(erros);
    return erros;

    
}