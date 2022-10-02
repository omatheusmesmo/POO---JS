class Produto {

    constructor(){
        this.id = 1;
        this.arrayProdutos = {};
    }

    salvar() {
        let produto = this.lerDados();

        this.validaCampo(produto);
        
        console.log(produto);
    }

    lerDados(){
        let produto = {}

        produto.id = this.id; 
        produto.nomeProduto = document.getElementById('produto').value;
        produto.preco = document.getElementById('preco').value;

        return produto;
    }

    validaCampo(produto){
        let msg = '';

        if(produto.nomeProduto == '') {
            msg += 'Informe o nome do Produto \n';
        }

        if(produto.preco == '') {
            msg += 'Informe o preço do Produto \n';
        }

    }

    cancelar() {
        
    }
}

var produto = new Produto();