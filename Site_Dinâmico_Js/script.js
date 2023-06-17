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





titulo(), subtitulo(), descricao()
