/* Formulário Overlay */

document.getElementById('button-form').addEventListener('click', function () {
    console.log('Botão de formulário clicado');
    document.getElementById('overlay').style.display = 'flex';
});

document.getElementById('close-form').addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'none';
});

/* Estrelas */

const ratingStars = document.querySelectorAll('.star');
const ratingInput = document.getElementById('nota');

ratingStars.forEach(star => {
    star.addEventListener('click', () => {
        const value = star.dataset.value;
        ratingInput.value = value;
        updateRating(value);
    });

    star.addEventListener('mouseover', () => {
        const value = star.dataset.value;
        updateRating(value, true);
    });

    star.addEventListener('mouseout', () => {
        const activeValue = ratingInput.value;
        updateRating(activeValue, true);
    });
});

function updateRating(value, hover = false) {
    ratingStars.forEach(star => {
        const starValue = star.dataset.value;
        star.classList.toggle('active', hover ? starValue <= value : starValue === value);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const opiniaoForm = document.getElementById('opiniao-form');

    opiniaoForm.addEventListener('submit', function (event) {
        event.preventDefault();

        console.log('Form submission attempted');

        // Obtenha os dados do formulário
        const nome = document.getElementById('nome').value;
        const tipo = document.getElementById('tipo').value;
        const nota = document.getElementById('nota').value;
        const comentarios = document.getElementById('comentarios').value;

        const respostaServidor = true;
        if (respostaServidor) {
            alert('Obrigado por dar sua opinião! Sua mensagem foi enviada com sucesso.');
            document.getElementById('overlay').style.display = 'none';
        } else {
            alert('Erro ao enviar a mensagem. Tente novamente.');
        }
    });
});
