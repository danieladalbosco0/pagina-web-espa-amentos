const imagem = document.querySelector('.imagem-destaque');

imagem.addEventListener('click', () => {
    imagem.style.marginTop = '60px';
    alert('Você alterou o espaçamento da imagem!');
});
