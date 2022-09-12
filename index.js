class Imovel {
    constructor(tipo_imovel, tamanho_area, aluguado) {
        this.tipo_imovel = tipo_imovel;
        this.tamanho_area = tamanho_area;
        this.aluguado = aluguado;
    }

    alerta_aluguel(i) {

        let indice = i - 1;

        if (this.aluguado == 'sim') {

            let linha = document.getElementById(indice);
            linha.setAttribute('class', 'linhas_alugadas');
        }
    }
}

function cadastrar() {

    event.preventDefault();

    let tipo_imovel = document.querySelector('#tipo_imovel').value;
    let tamanho_area = parseFloat(document.querySelector('#area').value);
    let aluguado = document.querySelector('input[name="aluguel"]:checked').value;

    let dados_imovel = new Imovel(tipo_imovel, tamanho_area, aluguado); // Instaciando o Obj.

    let linhas = document.createElement('li');
    linhas.setAttribute('class', 'linhas');
    linhas.setAttribute('id', indice());


    linhas.innerHTML = `<a href="#" class="bto_excluir" onclick="deletar(${indice()})"><i class="fa fa-trash" aria-hidden="true"></i>
    </a>Tipo: ${dados_imovel.tipo_imovel}<br>Tamanho: ${dados_imovel.tamanho_area} m²<br>Alugado: ${dados_imovel.aluguado}`;


    document.querySelector('.conteiner_dados').appendChild(lista);
    document.querySelector('#lista').appendChild(linhas);

    dados_imovel.alerta_aluguel(indice());
    limpar();

}

function indice() {

    let tamanho_lista = document.getElementById('lista').childElementCount;
    return tamanho_lista;
}

const deletar = (i) => { document.getElementById(i).remove() }

function limpar() {

    document.querySelector('#tipo_imovel').value = '';
    document.querySelector('#area').value = '';
}