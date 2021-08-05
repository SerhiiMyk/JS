// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
//
//
// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
//
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {

        let wrapDiv = document.createElement('div');
        document.body.appendChild(wrapDiv);

        let headerH1 = document.createElement('h1')
        headerH1.innerText = 'Users';
        wrapDiv.append(headerH1);

        headerH1.style.textAlign = 'center';

        let wrapUsersDiv = document.createElement('div');
        wrapDiv.append(wrapUsersDiv);

        wrapUsersDiv.classList.add('usersWrap');
        let usersWrap = document.getElementsByClassName('usersWrap')[0];

        usersWrap.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            background-color: cornflowerblue;
            padding-top: 10px;
            `;

        for (const user of users) {
            let userDiv = document.createElement('div');
            wrapUsersDiv.appendChild(userDiv);

            userDiv.style.cssText = `
            box-sizing: border-box;
            width: 40%;
            margin: 10px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            text-align: center;
            border: black solid 1px;
            background-color: silver;
            `;

            let pUser = document.createElement('p');
            pUser.innerText = `${user.id} - ${user.name}`;
            userDiv.appendChild(pUser);

            pUser.style.cssText = `
            margin: 0px;
            margin-bottom: 20px;
            font-weight: bold;
            font-size: 16px;
            `;

            let detailsBtn = document.createElement('button');
            userDiv.appendChild(detailsBtn);

            let detailsLink = document.createElement('a');
            detailsLink.innerText = 'show details';
            detailsLink.href = `user-details.html?user=${JSON.stringify(user)}`;
            detailsBtn.appendChild(detailsLink);

        }

    })
