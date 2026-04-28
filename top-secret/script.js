fetch('segredo-obscuro.txt')
    .then(response => response.text())
    .then(data => {
        const canvas = document.getElementById('canvas');
        canvas.textContent = data;
    });