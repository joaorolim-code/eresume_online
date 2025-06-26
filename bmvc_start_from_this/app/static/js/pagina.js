document.addEventListener('DOMContentLoaded', function() {
    // Elementos da página
    const usernameElement = document.getElementById('username');
    const logoutBtn = document.getElementById('logoutBtn');
    const editProfileBtn = document.getElementById('editProfileBtn');
    const changePasswordBtn = document.getElementById('changePasswordBtn');

    // Logout
    logoutBtn.addEventListener('click', function() {
        fetch('/logout', {
            method: 'POST',
            credentials: 'same-origin'
        })
        .then(response => {
            if (response.redirected) {
                window.location.href = response.url;
            }
        })
        .catch(error => {
            console.error('Logout error:', error);
        });
    });

    // Editar Perfil
    editProfileBtn.addEventListener('click', function() {
        alert('Funcionalidade de edição de perfil será implementada aqui!');
        // Exemplo: window.location.href = '/edit-profile';
    });

    // Alterar Senha
    changePasswordBtn.addEventListener('click', function() {
        alert('Funcionalidade de alteração de senha será implementada aqui!');
        // Exemplo: window.location.href = '/change-password';
    });

    // Atualizar dados do usuário (opcional)
    function updateUserData() {
        fetch('/api/user-data')
            .then(response => response.json())
            .then(data => {
                if (data.username) {
                    usernameElement.textContent = data.username;
                    document.getElementById('user-username').textContent = data.username;
                }
                if (data.last_access) {
                    document.getElementById('last-access').textContent = new Date(data.last_access).toLocaleString();
                }
            });
    }

    // Atualizar a cada 30 segundos (opcional)
    // setInterval(updateUserData, 30000);
});