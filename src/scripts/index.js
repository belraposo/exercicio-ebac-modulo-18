document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('botaoAlerta').addEventListener('click', function(e) {
        e.preventDefault()
        alert('Olá Usuário!');
    });
})