# movies-explorer-frontend
Фронтэнд часть дипломного проекта.

Макет проекта можно посмотреть [тут](https://disk.yandex.ru/d/Yd7_GyqI7be28A)

На первом этапе работ по фронтэнду выполнена адаптивная верстка следующих страниц:
* По роуту "/" - страница "О проекте" с основной информацией проекта: технологии, сроки и т.п. А так же сведения о студенте, выполнившем данный проект;
* По роуту "/movies" - страница с фильмами (сейчас фильмы получаются из БД-муляжа (роль которого выполняет JSON-файл в проекте), в дальнейшем они будут получены от API);
* По роуту "/saved-movies" - страница с фильмами, которые сохранил (добавил в понравившееся текущий пользователь);
* По роуту "/profile" - страница со сведениями о текущем пользователе, а так же форма для редактирования этих сведений;
* По роуту "/signin" - страница с формой авторизации зарегистрированного пользователя;
* По роуту "/signup" - страница с формой регистрации нового пользователя;
* По всем другим не предусмотренным маршрутам - отображается страница 404 Не найдено

Для организацции роутинга по страница приложения использован React Router v6.

При верстке проекта применен компонентный подход - каждая страница разделена на основные компоненты, которые при возможности переиспользуются.

На втором этапе реализовано: 
- Запроса к API для получения списка фильмов (используется API [BeatFilm](https://api.nomoreparties.co/beatfilm-movies));
- Запросы к API для регистрации, авторизации, редактирования данных пользователя, сохранения фильма пользователем и его удаления из сохраненных (используется API, созданный на бэкенд-этапе данного проекта, его код можно посмотреть [тут](https://github.com/Marinicheva/movies-explorer-api));
- Подгрузка контента на страницу по нажатию кнопки "Ещё";
- Поиск фильмов по заданной строке;
- Возможность фильтрации фильмов по длительности;
- Мгновенная валидация данных вводимых пользователем в формы приложения;
- Защита части роутов: /movies, /saved-movies и /profile авторизацией с использованием jwt-токена (c сохранением его в cookies);

Проект развернут на облачном сервере посмотреть можно [**тут**](https://movies.marinich.nomoredomains.club/)

Адреса проекта:

IP 62.84.113.185

Frontend https://movies.marinich.nomoredomains.club/

Backend https://api.movies.marinich.nomoredomains.club/

Ссылка на пул-реквест второго этапа фронтенд-части диплома [**тут**](https://github.com/Marinicheva/movies-explorer-frontend/pull/2)
