// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {

        let usersBox = document.getElementsByClassName('users-box')[0];
        for (const post of posts) {
            let pPost = document.createElement('p');
            pPost.innerText = `post number - ${post.id} `;
            let detailsBtn = document.createElement('button');
            detailsBtn.innerText = 'show comments';
            detailsBtn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(value => value.json())
                    .then(comments => {
                        let postsBox = document.getElementsByClassName('posts-box')[0];
                        postsBox.innerHTML = '';
                        for (const comment of comments) {
                            let liComments = document.createElement('li');
                            liComments.innerText = comment.body;
                            postsBox.append(liComments);
                        }
                    });
            };
            pPost.appendChild(detailsBtn);
            usersBox.appendChild(pPost);
        }
    });