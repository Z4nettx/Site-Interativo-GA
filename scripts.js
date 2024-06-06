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

    let messageIndex = 0;

    interactBtn.addEventListener('click', function () {
        if (messageIndex < messages.length) {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.textContent = messages[messageIndex];
            
            // Posicionamento aleatório
            const x = Math.random() * (window.innerWidth - 700);
            const y = Math.random() * (window.innerHeight - 700);
            balloon.style.left = `${x}px`;
            balloon.style.top = `${y}px`;

            balloonContainer.appendChild(balloon);
            messageIndex++;
        } else {
            alert('Você já aprendeu tudo sobre ginástica artística!');
        }
    });
});
