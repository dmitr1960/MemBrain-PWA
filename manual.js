// manual.js - Простой код для MemBrain
console.log('Manual.js loaded');

window.onload = function() {
    console.log('Page loaded');
    
    // Простая функция добавления карточки
    document.getElementById('addCardBtn').onclick = function() {
        var question = document.getElementById('newQuestion').value;
        var answer = document.getElementById('newAnswer').value;
        
        if (question && answer) {
            alert('Карточка добавлена: ' + question);
            // Очищаем поля
            document.getElementById('newQuestion').value = '';
            document.getElementById('newAnswer').value = '';
        } else {
            alert('Заполните вопрос и ответ!');
        }
    };
    
    // Функция сохранения темы
    document.getElementById('saveDeckBtn').onclick = function() {
        var title = document.getElementById('deckTitle').value;
        if (title) {
            alert('Тема "' + title + '" сохранена!');
        } else {
            alert('Введите название темы!');
        }
    };
};