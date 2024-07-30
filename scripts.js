document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    if (username === 'admin' && password === 'admin') {
        message.style.color = 'green';
        message.textContent = 'Login bem-sucedido!';
    } else {
        message.style.color = 'red';
        message.textContent = 'Usuário ou senha incorretos!';
    }
});
