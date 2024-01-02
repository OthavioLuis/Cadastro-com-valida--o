const form = document.getElementById('form');
const campos = document.querySelectorAll('.inputUser');
const spans = document.querySelectorAll('.requerimento-span');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const ver = document.getElementById("senha");
const olhar = document.getElementById("confirm-senha");

function setError(index) {
    campos[index].style.border = "2px solid #BB0A21";
    spans[index].style.display = 'block';
}

function removerErro(index) {
    campos[index].style.border = "1px solid green";
    spans[index].style.display = 'none';
}

function validarNome() {
    if(campos[0].value.length < 3) {
        setError(0);
    } else {
        removerErro(0);
    }
}

function validarEmail() {
    if(!emailRegex.test(campos[1].value)) {
        setError(1);
    } else {
        removerErro(1);
    }
}

function validarSenha() {
    if(campos[2].value.length < 5){
        setError(2);
    } else {
        removerErro(2);
        refazerSenha();
    }
}

function refazerSenha() {
    if(campos[2].value == campos[3].value && campos[3].value.length >= 5) {
        removerErro(3);
    } else {
        setError(3);
    }
}

function verSenha() {
    if (ver.type === "password") {
        ver.type = "text";
    } else {
        ver.type = "password";
    }
}

function olharSenha() {
    if (olhar.type === "password") {
        olhar.type = "text";
    } else {
        olhar.type = "password";
    }
}