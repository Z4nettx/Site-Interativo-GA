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
        "https://i.imgur.com/MSlimrZ.jpeg",
        "https://i.imgur.com/4e8QA1B.jpeg",
        "https://i.imgur.com/O1Eo9e6.jpeg",
        "https://i.imgur.com/4e8QA1B.jpeg"
    ];


    let messageIndex = 0;
    let currentBalloon = null;
    let currentImage = null;
    let currentBtn = null;

    interactBtn.addEventListener('click', function () {
        if (messageIndex < messages.length) {
            if (currentBalloon) {
                balloonContainer.removeChild(currentBalloon);
                if (currentImage) {
                    balloonContainer.removeChild(currentImage);
                }
                if (currentBtn) {
                    balloonContainer.removeChild(currentBtn);
                }
            }

            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.textContent = messages[messageIndex];

            const showImageBtn = document.createElement('button');
            showImageBtn.className = 'showImageBtn';
            showImageBtn.textContent = 'Mostrar Imagem';

            showImageBtn.addEventListener('click', function () {
                if (currentImage) {
                    balloonContainer.removeChild(currentImage);
                }

                const image = document.createElement('img');
                image.className = 'balloonImage';
                image.src = images[messageIndex];
                image.alt = messages[messageIndex];

                // Posicionamento da imagem abaixo do balão
                const x = parseInt(balloon.style.left, 10) + 25; // Centraliza a imagem abaixo do balão
                const y = parseInt(balloon.style.top, 10) + 80; // Posiciona a imagem abaixo do balão
                image.style.left = `${x}px`;
                image.style.top = `${y}px`;

                balloonContainer.appendChild(image);
                currentImage = image;
            });

            // Posicionamento aleatório
            const x = Math.random() * (window.innerWidth - 200);
            const y = Math.random() * (window.innerHeight - 200);
            balloon.style.left = `${x}px`;
            balloon.style.top = `${y}px`;
            showImageBtn.style.left = `${x + 25}px`;
            showImageBtn.style.top = `${y + 60}px`;

            balloonContainer.appendChild(balloon);
            balloonContainer.appendChild(showImageBtn);
            currentBalloon = balloon;
            currentBtn = showImageBtn;
            messageIndex++;
        } else {
            alert('Você já aprendeu tudo sobre ginástica artística!');
        }
    });
});
