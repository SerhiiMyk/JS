//1.Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(users => {
        console.log(users);
        let userBox = document.getElementsByClassName('userBox')[0];
        for (const user of users) {
            let pUser = document.createElement('p');
            pUser.innerText = `${user.userId} - ${user.id} - ${user.title}`;
            userBox.append(pUser);
        }
    })

// 2.Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(respose => respose.json())
    .then(coments => {
        console.log(coments);
        let userBox = document.getElementsByClassName('userBox')[0];
        for (const coment of coments) {
            let pComent = document.createElement('p');
            pComent.innerText = `${coment.postId} - ${coment.id} - ${coment.name}`;
            userBox.append(pComent);
        }
    })