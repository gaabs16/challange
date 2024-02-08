alert("Boas vindas");

let listaGenerica = ['a', 'e', 'i', 'o', 'u'];
let listaCodificada = ['ai', 'enter', 'imes', 'ober', 'ufat'];
let botaoCriptografar = document.querySelector('.botao_criptografar');
let mensagem = document.getElementById('mensagem');
let texto = document.getElementById('texto');

function criptografar() {
    let textoArray = texto.value.split('');
    let textoCriptografado = '';

    for (let i = 0; i < textoArray.length; i++) {
        let letra = textoArray[i];
        if (listaGenerica.includes(letra)) {
            let index = listaGenerica.indexOf(letra);
            letra = listaCodificada[index];
        }
        textoCriptografado += letra;
    }

    if (texto.value) {
        mensagem.innerText = textoCriptografado;
        alert('Texto adicionado');
    } else {
        alert('insira um texto');
    }
}

botaoCriptografar.addEventListener('click', criptografar);

function descriptografar() {
    let descriptografada = texto.value;
    for (let i = 0; i < listaCodificada.length; i++) {
        descriptografada = descriptografada.replaceAll(listaCodificada[i], listaGenerica[i]);
    }
    mensagem.innerText = descriptografada;
}

function copiar() {
    let textoCopiado = mensagem.innerText;
    navigator.clipboard.writeText(textoCopiado).then(() => {
        alert("O texto foi copiado para sua área de transferência");
    }, () => {
        alert("Erro ao copiar o texto");
    });
}

botaoCopiar.addEventListener('click', copiar);

