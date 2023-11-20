'use strict';

//Задание № 1. Видео 12

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres : [],
    privat: false,
    start: () => {
        personalMovieDB.count = prompt("Сколько фильмов Вы уже посмотрели","1");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt("Сколько фильмов Вы уже посмотрели","1");
        }
    },
    showMyDB: (hidden) => {
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) alert("Просмотрено довольно мало фильмов");
        else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) alert("Вы классический зритель");
        else if (personalMovieDB.count > 30)alert ("Вы киноман!");
        else alert("Произошла ошибка");
    },
    rememberMyFilms: () => {
        for(let i = 0; i < 2; i++){
            const lastFilm = prompt("Один из последних просмотренных фильмов", "Железный человек"),
            lastFilmRanking = prompt("На сколько оцените его?", "10");
            if (lastFilm != null && lastFilmRanking !== null && lastFilm !='' && lastFilmRanking != '' && lastFilm.length < 50) {
                personalMovieDB.movies[lastFilm] = lastFilmRanking;
                console.log('done!');
            }
            else {
                console.log('error');
                i--;
            }
        }
    },
    writeYourGenres: () => {
        for (let i = 0; i < 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
            if (genre == '' || genre == null){
                console.log('Вы ввели некорректные данные или не ввели их вообще')
                i--;
            }
            else personalMovieDB.genres[i] = genre;
        }
        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Любимый жанр № ${index + 1} - это ${item}`)
        })
    },
    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) personalMovieDB.privat = false;
        else personalMovieDB.privat = true;
    }
};

// personalMovieDB.start();
// personalMovieDB.showMyDB();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();


//Задание № 2. Видео 15

    /*1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

    2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
    отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
    возвращаем пользователя к вопросам опять

    3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
    "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
    "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

    4) Потренироваться и переписать цикл еще двумя способами*/

//Задание № 3. Видео 18

    /* Задание на урок:

    1) Первую часть задания повторить по уроку

    2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
    false - выводит в консоль главный объект программы

    3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
    "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
    genres

    P.S. Функции вызывать не обязательно*/

//Задание № 4. Видео 24

    /* Задание на урок:

    1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
    перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
    Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

    2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
    переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

    3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
    Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
    при помощи метода forEach вывести в консоль сообщения в таком виде:
    "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

//Задание № 5. Видео

//Задание № 6. Видео

//Задание № 7. Видео

//Задание № 8. Видео

//Задание № 9. Видео

//Задание № 10. Видео