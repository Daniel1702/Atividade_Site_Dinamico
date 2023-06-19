function titulo() {
    var titulo = window.document.getElementById('titulo')
    var resp_ti = prompt('Insira o título: ')
    titulo.innerText = resp_ti
}

function subtitulo() {
    var sub = window.document.getElementById('subtitulo')
    var resp_subt = prompt('Insira um Subtítulo: ')
    sub.innerText = resp_subt
}

function descricao() {
    var desc = window.document.getElementById('descricao')
    var resp_desc = prompt('Digite a descrição: ')
    desc.innerText = resp_desc
}


function item1() {
    var it1 = window.document.getElementById('itens1')
    var resp_it1 = prompt('Digite o Primeiro Item: ')
    it1.innerText = resp_it1
}
function item2() {
    var it2 = window.document.getElementById('itens2')
    var resp_it2 = prompt('Digite o Segundo Item: ')
    it2.innerText = resp_it2
}
function item3() {
    var it3 = window.document.getElementById('itens3')
    var resp_it3 = prompt('Digite o Terceiro Item: ')
    it3.innerText = resp_it3
}
function item4() {
    var it4 = window.document.getElementById('itens4')
    var resp_it4 = prompt('Digite o Quarto Item: ')
    it4.innerText = resp_it4
}
function other() {
    var other = window.document.getElementById('outro_item')
    var resp_other = prompt('Digite outro Item: ')
    other.innerText = resp_other
}



// Header
titulo(), subtitulo(), descricao()
// Itens
 item1(), item2(), item3(), item4(), other()
