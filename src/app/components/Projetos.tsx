const projetos = [
    {
        "projeto1": "Restaurant Tagline",
        "projeto2": "QuizArt",
        "projeto3": "Blog de Programação",
        "projeto4": "Art"
    }
];

const descricao = [
    {
        "descricao1":  "Lorem Ipslum",
        "descricao2": "Lorem iodsasdasd",
        "descricao3": "loloolololol",
        "descricao4": "sdhfhsadfjas"
    }
];

let currentSlideIndex = 0;
        let slideInterval; // Variável para controlar o intervalo do autoplay (reprodução automática)

        // Referências aos elementos DOM
        const slideshowContainer = document.getElementById('slideshow-container');
        const slideImage = document.getElementById('slide-image');
        const slideTitle = document.getElementById('slide-title');
        const slideDescription = document.getElementById('slide-description');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const dotsContainer = document.getElementById('dots-container');
        const loadingIndicator = document.getElementById('loading-indicator');


        /**
         * Inicia a reprodução automática do slideshow.
         */
        function startAutoplay() {
            // Limpa qualquer intervalo existente antes de iniciar um novo
            stopAutoplay(); 
            // Avança o slide a cada 5 segundos (5000ms)
            slideInterval = setInterval(nextSlide, 5000); 
        }

        /**
         * Para a reprodução automática do slideshow.
         */
        function stopAutoplay() {
            clearInterval(slideInterval);
        }

        /**
         * Cria e insere os indicadores de ponto (dots) no DOM.
         */
        function createDots() {
            dotsContainer.innerHTML = ''; // Limpa os dots antigos antes de recriar
            slidesData.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.classList.add('dot', 'h-3', 'w-3', 'rounded-full', 'bg-gray-400', 'hover:bg-indigo-500', 'transition', 'duration-300', 'focus:outline-none');
                dot.setAttribute('data-index', index);
                dot.setAttribute('aria-label', `Ir para o slide ${index + 1}`);
                // Pausa o autoplay ao clicar em um dot e o reinicia em seguida
                dot.onclick = () => {
                    stopAutoplay();
                    showSlide(index);
                    startAutoplay();
                };
                dotsContainer.appendChild(dot);
            });
        }

        /**
         * Atualiza a imagem e o texto do slide com base no índice fornecido.
         * Garante que o carregamento da imagem seja suave.
         * @param {number} index - O índice do slide a ser exibido.
         */
        function showSlide(index) {
            // Garante que o índice esteja dentro dos limites (loop infinito)
            if (index >= slidesData.length) {
                index = 0;
            } else if (index < 0) {
                index = slidesData.length - 1;
            }
            currentSlideIndex = index;

            const slide = slidesData[currentSlideIndex];

            // 1. Mostrar o indicador de carregamento e esconder a imagem (para transição)
            loadingIndicator.classList.remove('hidden');
            slideImage.classList.add('opacity-0');
            
            // 2. Pré-carregar a nova imagem
            const tempImg = new Image();
            tempImg.onload = () => {
                // 3. Quando a imagem carregar, atualizar a fonte e mostrar
                slideImage.src = slide.imageUrl;
                
                // Atualizar o texto
                slideTitle.textContent = slide.title;
                slideDescription.textContent = slide.description;

                // 4. Esconder indicador e mostrar a imagem com a transição CSS
                loadingIndicator.classList.add('hidden');
                slideImage.classList.remove('opacity-0');
            };
            tempImg.onerror = () => {
                // Fallback em caso de erro no carregamento da imagem
                slideImage.src = "https://placehold.co/1200x675/ef4444/ffffff?text=Erro+ao+Carregar+Imagem";
                slideTitle.textContent = "Erro de Carregamento";
                slideDescription.textContent = "Não foi possível carregar a imagem.";
                loadingIndicator.classList.add('hidden');
                slideImage.classList.remove('opacity-0');
            };
            tempImg.src = slide.imageUrl; // Inicia o carregamento

            // 5. Atualizar os indicadores de ponto
            document.querySelectorAll('.dot').forEach((dot, i) => {
                if (i === currentSlideIndex) {
                    dot.classList.remove('bg-gray-400');
                    dot.classList.add('bg-indigo-600');
                } else {
                    dot.classList.remove('bg-indigo-600');
                    dot.classList.add('bg-gray-400');
                }
            });
        }

        /**
         * Navega para o próximo slide.
         */
        function nextSlide() {
            showSlide(currentSlideIndex + 1);
        }

        /**
         * Navega para o slide anterior.
         */
        function prevSlide() {
            showSlide(currentSlideIndex - 1);
        }

        // --- Event Listeners para Interação Manual e Autoplay ---
        
        // Botão Anterior
        prevBtn.addEventListener('click', () => {
            stopAutoplay(); // Para o autoplay ao clicar manualmente
            prevSlide();
            startAutoplay(); // Reinicia
        });
        
        // Botão Próximo
        nextBtn.addEventListener('click', () => {
            stopAutoplay(); // Para o autoplay ao clicar manualmente
            nextSlide();
            startAutoplay(); // Reinicia
        });
        
        // Pausa no Hover: Para o autoplay quando o mouse entra na área do slideshow
        slideshowContainer.addEventListener('mouseenter', stopAutoplay);
        
        // Reinicia no Mouse Leave: Inicia o autoplay quando o mouse sai da área
        slideshowContainer.addEventListener('mouseleave', startAutoplay);


        // Inicialização: Criar os dots, exibir o primeiro slide e iniciar o autoplay
        window.onload = () => {
            createDots();
            showSlide(currentSlideIndex);
            startAutoplay(); // Inicia a reprodução automática
        };

export default function Projetos () {
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">

    <div id="slideshow-container" className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:shadow-2xl">

        <div className="relative aspect-video bg-gray-900 flex items-center justify-center">

            <img id="slide-image" src="" alt="Slide Atual" className="slide-image w-full h-full object-cover opacity-0">
            
            <div id="loading-indicator" className="absolute inset-0 flex items-center justify-center text-white text-xl animate-pulse">
                Carregando...
            </div>

            <button id="prev-btn" className="absolute left-4 p-3 bg-black bg-opacity-30 hover:bg-opacity-60 text-white rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/50" aria-label="Slide Anterior">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button id="next-btn" className="absolute right-4 p-3 bg-black bg-opacity-30 hover:bg-opacity-60 text-white rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/50" aria-label="Próximo Slide">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>

        <div className="p-6 md:p-8">
            <h2 id="slide-title" className="text-2xl font-bold text-gray-800 mb-2 transition duration-500 ease-in-out"></h2>
            <p id="slide-description" className="text-gray-600 transition duration-500 ease-in-out"></p>

            <div id="dots-container" className="mt-4 flex justify-center space-x-2">
                </div>
        </div>

    </div>

}