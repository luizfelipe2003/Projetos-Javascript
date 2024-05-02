// https://jsonplaceholder.typicode.com/posts


// REQUISIÇÃO API
async function readPosts(){
    let postArea = document.querySelector('.posts')
    postArea.innerHTML = 'Carregando...';

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

    if(json.length > 0){
        postArea.innerHTML = '';
        
        for(let i in json){
            let postHtml = `<div><h1>${json[i].title}</h1>${json[i].body}</div>`;
            postArea.innerHTML += postHtml;
        }
    
    } else{
        postArea.innerHTML = 'Nenhum post para exibir';
    }
}

//Requisição Post mandando o titulo e o body
async function addNewPost(title, body){
    await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                userId: 2
            })
        }
    );
//Limpa os campos e ler os Posts
    document.querySelector('#titleField').value;
    document.querySelector('#bodyfield').value;

    readPosts();

}


//Evento de clique e verificação de valor no title e no body
document.querySelector('#insertbutton').addEventListener('click', () => {
    let title = document.querySelector('#titleField').value;
    let body = document.querySelector('#bodyfield').value;
//Aviso para preencher os campos caso não houver valor   
    if (title && body){
        addNewPost(title && body);
    } else {
        alert("Preencha todos os campos.")
    }})

readPosts();