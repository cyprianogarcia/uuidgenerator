function generateUUID() {
    const generatedUuid = uuidv4();
    document.getElementById('uuidInput').value = generatedUuid;
  }

  function copyToClipboard() {
    const uuidInput = document.getElementById('uuidInput');
    uuidInput.select();
    document.execCommand('copy');
    alert('UUID copiado para a área de transferência!');
  }
  
  function reloadPage() {
    location.reload(true);
  }