document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('gameStationModal');
    const closeButton = document.querySelector('#gameStationModal .modal-close-button');
    const modalTitle = document.getElementById('modalNewsTitle');
    const modalBody = document.getElementById('modalNewsBody');

    function openModal(title, content) {
        modalTitle.textContent = title;
        modalBody.textContent = content;
        modal.classList.add('active');
    }

    function closeModal() {
        modal.classList.remove('active');
    }

    // Delegação de eventos: Ouve cliques em todo o documento
    document.body.addEventListener('click', (event) => {
        // Verifica se o elemento clicado (ou um de seus pais) tem a classe 'read-more-trigger'
        const trigger = event.target.closest('.read-more-trigger');
        if (trigger) {
            event.stopPropagation(); // Impede a propagação do evento para elementos pai
            const title = trigger.dataset.title || 'Detalhes da Notícia';
            const content = trigger.dataset.content || 'Conteúdo completo não disponível.';
            openModal(title, content);
        }
    });

    closeButton.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});