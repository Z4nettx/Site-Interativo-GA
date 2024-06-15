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
    let currentShowBtn = null;
    let currentHideBtn = null;

    interactBtn.addEventListener('click', function () {
        if (messageIndex < messages.length) {
            if (currentBalloon) {
                balloonContainer.removeChild(currentBalloon);
                if (currentImage) {
                    balloonContainer.removeChild(currentImage);
                }
                if (currentShowBtn) {
                    balloonContainer.removeChild(currentShowBtn);
                }
                if (currentHideBtn) {
                    balloonContainer.removeChild(currentHideBtn);
                }
            }

            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.textContent = messages[messageIndex];

            const showImageBtn = document.createElement('button');
            showImageBtn.className = 'showImageBtn';
            showImageBtn.textContent = 'Mostrar Imagem';

            const hideImageBtn = document.createElement('button');
            hideImageBtn.className = 'hideImageBtn';
            hideImageBtn.textContent = 'Ocultar Imagem';
            hideImageBtn.style.display = 'none'; // Inicialmente escondido

            showImageBtn.addEventListener('click', function () {
                if (currentImage) {
                    balloonContainer.removeChild(currentImage);
                }

                const image = document.createElement('img');
                image.className = 'balloonImage';
                image.src = images[messageIndex];
                image.alt = messages[messageIndex];

                // Posicionamento da imagem ao lado do balão
                const x = parseInt(balloon.style.left, 10) + 220; // 220 pixels à direita do balão
                const y = parseInt(balloon.style.top, 10);
                image.style.left = `${x}px`;
                image.style.top = `${y}px`;
                image.style.position = 'absolute'; // Garante que a imagem esteja no lugar correto

                hideImageBtn.style.left = `${x + 160}px`; // Ajusta o posicionamento para não sobrepor
                hideImageBtn.style.top = `${y}px`;

                balloonContainer.appendChild(image);
                balloonContainer.appendChild(hideImageBtn);
                currentImage = image;

                // Alterna os botões
                showImageBtn.style.display = 'none';
                hideImageBtn.style.display = 'inline-block';
            });

            hideImageBtn.addEventListener('click', function () {
                if (currentImage) {
                    balloonContainer.removeChild(currentImage);
                    currentImage = null;
                }

                // Alterna os botões
                hideImageBtn.style.display = 'none';
                showImageBtn.style.display = 'inline-block';
            });

            // Posicionamento aleatório
            const x = Math.random() * (window.innerWidth - 400); // Ajuste para acomodar o balão e a imagem
            const y = Math.random() * (window.innerHeight - 200);
            balloon.style.left = `${x}px`;
            balloon.style.top = `${y}px`;
            showImageBtn.style.left = `${x + 220}px`; // Posiciona o botão ao lado do balão
            showImageBtn.style.top = `${y}px`;

            balloonContainer.appendChild(balloon);
            balloonContainer.appendChild(showImageBtn);
            currentBalloon = balloon;
            currentShowBtn = showImageBtn;
            currentHideBtn = hideImageBtn;
            messageIndex++;
        } else {
            alert('Você já aprendeu tudo sobre ginástica artística!');
        }
    });
});
