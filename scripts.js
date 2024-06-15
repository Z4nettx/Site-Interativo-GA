document.addEventListener('DOMContentLoaded', function () {
    const interactBtn = document.getElementById('interactBtn');
    const balloonContainer = document.getElementById('balloonContainer');

    const topics = [
        "Introdução",
        "Solo",
        "Barras Assimétricas",
        "Barra Fixa",
        "Argolas",
        "Cavalo com Alças",
        "Salto sobre a Mesa",
        "Trave de Equilíbrio",
        "Benefícios",
        "Treinamento",
        "Saúde",
        "Competições",
        "História",
        "Popularidade",
        "Eventos Importantes"
    ];

    const messages = [
        "A ginástica artística é uma modalidade olímpica com apresentações em aparelhos como solo, barras e argolas.",
        "No solo, os ginastas executam uma série de movimentos acrobáticos e coreográficos ao som de música.",
        "Nas barras assimétricas, ginastas femininas demonstram habilidades de transição e voo entre duas barras de alturas diferentes.",
        "Na barra fixa, ginastas masculinos realizam giros e soltas com alto grau de dificuldade.",
        "As argolas exigem força e estabilidade, com movimentos estáticos e de balanço para os ginastas masculinos.",
        "O cavalo com alças é um aparelho exclusivo para homens, onde executam movimentos circulares contínuos com as pernas.",
        "O salto sobre a mesa envolve uma corrida seguida de um salto explosivo com acrobacias no ar, utilizado por ambos os sexos.",
        "A trave de equilíbrio é um aparelho feminino onde ginastas realizam movimentos de dança e acrobacia em uma superfície estreita.",
        "A ginástica artística desenvolve força, flexibilidade, coordenação e disciplina nos atletas.",
        "Os ginastas treinam por muitos anos para aperfeiçoar suas habilidades e competir em nível internacional.",
        "Além de ser uma forma de arte, a ginástica artística também promove saúde física e mental.",
        "As competições de ginástica artística são divididas em categorias de idade e nível de habilidade.",
        "A ginástica artística tem uma rica história, com suas raízes remontando à Grécia Antiga.",
        "Atualmente, a ginástica artística é popular em todo o mundo, com eventos realizados em muitos países.",
        "Os grandes eventos de ginástica artística incluem os Jogos Olímpicos, Campeonatos Mundiais e Copas do Mundo."
    ];

    const images = [
        "https://www.cob.org.br/pt/img/noticia/imagem/420/grande/", // Atualize com os caminhos das suas imagens
        "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/08/49256_4E35AD85148420A7-1.jpg",
        "https://static.todamateria.com.br/upload/ba/rr/barras_assima_tricas_1.jpg?auto_optimize=low",
        "https://img.olympics.com/images/image/private/t_twitter_share_thumb/f_auto/primary/acjehfe86zwvf8txr3is",
        "https://www.olimpiadatododia.com.br/wp-content/uploads/2020/03/arthur-zanetti-argolas-jogos-oli%CC%81mpicos-gina%CC%81stica-arti%CC%81stica-londres-2012.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Ago-Xv_FruN19cx9ykpo248Bh3Lf6tOSA&s",
        "https://www.ufrgs.br/tesauros/_acervo/image/2022/04/img-0029238-df22236ff4.jpg", // aqui.
        "https://www.olimpiadatododia.com.br/wp-content/uploads/2020/12/trave-jogos-oli%CC%81mpicos-to%CC%81quio-2020.jpg",
        "https://www.esporteeinclusao.com.br/wp-content/uploads/2019/02/ginastica-artistica.jpg",
        "https://www.cob.org.br/public/uploads/biblioteca/2019/05/386547-360791_879917_ct_de_ginastica_artistica_time_brasil__treinos_67__1_.jpg",
        "https://www.cob.org.br/pt/img/noticia/imagem/420/grande/",
        "https://www.dicionarioolimpico.com.br/uploads/cenarios/mapas/0d87c778d348ddd49beb68a4d15fcb1d.png",
        "https://aovivoesporte.com/wp-content/uploads/2021/02/4d24b07583c89be1baaf7a97cb91dd82_A-historia-da-ginastica-artistica.png",
        "https://i.imgur.com/4e8QA1B.jpeg",
        "https://omaringa.com.br/wp-content/uploads/2021/06/Olimpiadas-argolas-scaled.jpg",
        
        
    ];

    let messageIndex = 0;
    let currentBalloon = null;
    let currentImage = null;
    let currentShowBtn = null;
    let currentHideBtn = null;
    let currentTitle = null;

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
                if (currentTitle) {
                    balloonContainer.removeChild(currentTitle);
                }
            }

            const title = document.createElement('div');
            title.className = 'title';
            title.textContent = topics[messageIndex];

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
            title.style.left = `${x}px`;
            title.style.top = `${y - 40}px`; // Posiciona o título acima do balão
            balloon.style.left = `${x}px`;
            balloon.style.top = `${y}px`;
            showImageBtn.style.left = `${x + 220}px`; // Posiciona o botão ao lado do balão
            showImageBtn.style.top = `${y}px`;

            balloonContainer.appendChild(title);
            balloonContainer.appendChild(balloon);
            balloonContainer.appendChild(showImageBtn);
            currentTitle = title;
            currentBalloon = balloon;
            currentShowBtn = showImageBtn;
            currentHideBtn = hideImageBtn;
            messageIndex++;

           
        } else {
            alert('Você já aprendeu tudo sobre ginástica artística!');
        }
    });
});
