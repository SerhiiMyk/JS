const JSONUser = new URL(location).searchParams.get('user');
const user = JSON.parse(JSONUser);

let userDetailsWrap = document.createElement('div');
document.body.append(userDetailsWrap);

let headerH2 = document.createElement('h2');
headerH2.innerText = 'User-details';
userDetailsWrap.append(headerH2);

headerH2.style.textAlign = 'center';

let userDetails = document.createElement('div');
userDetailsWrap.append(userDetails);

userDetailsWrap.style.cssText = `
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: cornflowerblue;
            `;
userDetails.style.cssText = `
            display: flex;
            justify-content: center;
            border: black solid 1px;
            background-color: silver;
            width: 40%
            `;
let ul = document.createElement('ul');
userDetails.append(ul);

const testTypeObject = function (value) {
    return (typeof value === 'object');
}

const iterObj = function (obj) {
    for (let value in obj) {
        if (testTypeObject(obj[value])) {
            iterObj(obj[value]);
        } else {
            let li = document.createElement('li');
            li.innerText = `${value} - ${obj[value]}`
            ul.append(li);
        }
    }
}
iterObj(user);

let userPostsBtn = document.createElement('button');
userPostsBtn.innerText = 'post of current user';
userDetailsWrap.append(userPostsBtn);

userPostsBtn.style.cssText = `
           width: 90%;
           margin: 20px 0;
            `;
let userPosts = document.createElement('div');

userPostsBtn.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {

            userDetailsWrap.append(userPosts);
            userPosts.innerText = '';

            userPosts.style.cssText = `
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        `;
            for (const post of posts) {

                let postDiv = document.createElement('div');
                userPosts.append(postDiv);

                postDiv.style.cssText = `
                        display: flex;
                        flex-direction: column;
                        margin: 5px;
                        width: 18%;
                        padding: 10px;
                        box-sizing: border-box;
                        border: black solid 1px;
                        background-color: silver;
                        `;
                let postTitleDiv = document.createElement('div');
                postDiv.append(postTitleDiv);

                postTitleDiv.style.cssText = `
                        display: flex;
                        flex-direction: column;
                        text-align: center;
                        justify-content: center;
                        height: 120px;
                        `;
                let postTitle = document.createElement('p');
                postTitleDiv.append(postTitle);
                postTitle.innerText = post.title;

                let postDetailsBtn = document.createElement('button');
                postDiv.append(postDetailsBtn);

                let postDetailsLink = document.createElement('a');
                postDetailsLink.innerText = 'show post details';
                postDetailsLink.href = `post-details.html?post=${JSON.stringify(post)}`;
                postDetailsBtn.append(postDetailsLink);

            }
        });
}