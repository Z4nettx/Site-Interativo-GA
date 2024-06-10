document.addEventListener('DOMContentLoaded', function () {
    const interactBtn = document.getElementById('interactBtn');
    const balloonContainer = document.getElementById('balloonContainer');

    const messages = [
        "A ginástica artística é uma modalidade olímpica!",
        "Ela inclui apresentações em diferentes aparelhos como solo, barras e argolas.",
        "Os atletas realizam movimentos de força, flexibilidade, equilíbrio e coordenação.",
        "As competições são divididas em masculino e feminino.",
        "É um esporte que exige muita disciplina e dedicação."
    ];

    const images = [
        "https://www.cob.org.br/pt/img/noticia/imagem/420/grande/", // Atualize com os caminhos das suas imagens
        "https://imgur.com/MSlimrZ",
        "https://imgur.com/4e8QA1B",
        "https://imgur.com/O1Eo9e6",
        "https://imgur.com/4e8QA1B"
    ];

    let messageIndex = 0;
    let currentBalloon = null;
    let currentImage = null;

    interactBtn.addEventListener('click', function () {
        if (messageIndex < messages.length) {
            if (currentBalloon) {
                balloonContainer.removeChild(currentBalloon);
                balloonContainer.removeChild(currentImage);
            }

            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.textContent = messages[messageIndex];
            
            const image = document.createElement('img');
            image.className = 'balloonImage';
            image.src = images[messageIndex];
            image.alt = messages[messageIndex];

            // Posicionamento aleatório
            const x = Math.random() * (window.innerWidth - 200);
            const y = Math.random() * (window.innerHeight - 200);
            balloon.style.left = `${x}px`;
            balloon.style.top = `${y}px`;
            image.style.left = `${x + 25}px`; // Centraliza a imagem abaixo do balão
            image.style.top = `${y + 80}px`; // Posiciona a imagem abaixo do balão

            balloonContainer.appendChild(balloon);
            balloonContainer.appendChild(image);
            currentBalloon = balloon;
            currentImage = image;
            messageIndex++;
        } else {
            alert('Você já aprendeu tudo sobre ginástica artística!');
        }
    });
});
