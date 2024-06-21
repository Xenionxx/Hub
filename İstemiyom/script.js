function showQuestion() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    document.querySelector('.body').style.display = 'none';
    const questionText = document.getElementById('question-text');
    questionText.textContent = `${name} ${surname}, benimle çıkar mısın?`;
    document.getElementById('question').style.display = 'flex';
}

function accept() {
    document.getElementById('question').style.display = 'none';
    document.getElementById('result').style.display = 'flex';
}

function moveNoButton() {
    const noButton = document.getElementById('no-button');
    const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight));
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}
