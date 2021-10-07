
const url = 'https://jsonplaceholder.typicode.com/posts';

//create post:

const formElement = document.getElementById('new-post-form');

const addNewPost = async (event) => {
    //prevent form from refreshing:
    event.preventDefault();

    const userField = document.getElementById('user');
    const titleField = document.getElementById('title');
    const bodyField = document.getElementById('body');

    const requestBody = {
        userId: userField.value,
        title: titleField.value,
        body: bodyField.value
    }

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(requestBody)
    });
    //response will be a promise returned

    const data = await response.json();

    //reset field;
    userField.value = '';
    titleField.value = '';
    bodyField.value = '';

    document.getElementById('status').innerHTML = 'Successfully created post';
}

formElement.addEventListener('submit', addNewPost);