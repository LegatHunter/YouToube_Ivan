'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// Задания на урок:

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

const reklama = document.querySelectorAll('.promo__adv img');
reklama.forEach(item => item.remove());

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

const poster = document.querySelector('.promo__bg');
poster.style.backgroundImage = 'url("img/bg.jpg")';

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

const genre = poster.querySelector('.promo__genre');
genre.textContent = 'Драма';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту
// 5) Добавить нумерацию выведенных фильмов

const films = document.querySelector('.promo__interactive-list')
films.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    films.innerHTML += `<li class="promo__interactive-item">${i+1}) ${film}
    <div class="delete"></div>
</li>`
});






