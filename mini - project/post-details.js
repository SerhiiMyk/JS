const JSONPost = new URL(location).searchParams.get('post');
const post = JSON.parse(JSONPost);


let postDetailsWrap = document.createElement('div');
document.body.append(postDetailsWrap);

postDetailsWrap.style.cssText = `
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: cornflowerblue;
            `;

let postHeaderH2 = document.createElement('h2');
postHeaderH2.innerText = 'Post-details';
postDetailsWrap.append(postHeaderH2);

postHeaderH2.style.textAlign = 'center';

let postDetails = document.createElement('div');
postDetailsWrap.append(postDetails);

postDetails.style.cssText = `
            display: flex;
            justify-content: center;
            border: black solid 1px;
            background-color: silver;
            width: 50%
            `;

let ul = document.createElement('ul')
postDetails.append(ul);

for (const postElement in post) {
    let li = document.createElement('li');
    li.innerText = `${postElement} - ${post[postElement]}`
    ul.append(li);
}


let postCommentsBtn = document.createElement('button');
postCommentsBtn.innerText = 'comments of current post';
postDetailsWrap.append(postCommentsBtn);

postCommentsBtn.style.cssText = `
           width: 90%;
           margin: 20px 0;
            `;
let postComments = document.createElement('div');

postCommentsBtn.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/post/${post.id}/comments`)
        .then(value => value.json())
        .then(comments => {

            postDetailsWrap.append(postComments);
            postComments.style.cssText = `
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        `;

            postComments.innerHTML = '';
            for (const comment of comments) {

                let commentDiv = document.createElement('div');
                postComments.append(commentDiv);

                commentDiv.style.cssText = `
                        display: flex;
                        flex-direction: column;
                        margin: 5px;
                        width: 22%;
                        padding: 10px;
                        box-sizing: border-box;
                        border: black solid 1px;
                        text-align: center;
                        justify-content: center;
                        background-color: silver;
                        `;

                let pComment = document.createElement('p');
                pComment.innerText = comment.body;
                commentDiv.append(pComment);
            }
        });
}
