function generateUUID() {
    const generatedUuid = uuidv4();
    document.getElementById('uuidInput').value = generatedUuid;
}

function copyToClipboard() {
    const uuidInput = document.getElementById('uuidInput');
    const copiado = document.getElementById('copiado');
    
    const tempInput = document.createElement('input');
    tempInput.value = uuidInput.value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    copiado.classList.add('ativo');
    setTimeout(function () {
        copiado.classList.remove('ativo');
    }, 4000);
}


function reloadPage() {
    location.reload(true);
}