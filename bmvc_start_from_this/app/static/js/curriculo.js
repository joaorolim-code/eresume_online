

document.addEventListener('DOMContentLoaded', function() {
    console.log('Script.js carregado com sucesso!');

    const infoExtraDiv = document.querySelector('.info-extra');
    if (infoExtraDiv) {
        infoExtraDiv.classList.add('fade-in');

        infoExtraDiv.addEventListener('click', function() {
            console.log('Seção de Dados do Usuário clicada!');

        });
    }

    const toggleButton = document.getElementById('toggleDetailsButton');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            if (infoExtraDiv) {
                if (infoExtraDiv.style.display === 'none') {
                    infoExtraDiv.style.display = 'block';
                    toggleButton.textContent = 'Ocultar Detalhes do Usuário';
                } else {
                    infoExtraDiv.style.display = 'none';
                    toggleButton.textContent = 'Mostrar Detalhes do Usuário';
                }
            }
        });
    }
});

