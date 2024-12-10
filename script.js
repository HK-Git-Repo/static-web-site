document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const jsonOutput = document.getElementById('jsonOutput');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le rechargement de la page

        let isValid = true;

        // Réinitialiser les messages d'erreur
        usernameError.textContent = '';
        passwordError.textContent = '';
        usernameError.style.display = 'none';
        passwordError.style.display = 'none';

        // Validation du champ "Nom d'utilisateur"
        if (usernameInput.value.trim() === '') {
            usernameError.textContent = 'Le nom d\'utilisateur est requis.';
            usernameError.style.display = 'block';
            isValid = false;
        }

        // Validation du champ "Mot de passe"
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Le mot de passe est requis.';
            passwordError.style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            // Récupération des valeurs des champs
            const formData = {
                username: usernameInput.value.trim(),
                password: passwordInput.value.trim()
            };

            // Affichage du JSON
            jsonOutput.textContent = JSON.stringify(formData, null, 2);

            // Effacer les champs du formulaire
            form.reset();
        }
    });
});
