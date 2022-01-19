const endpoint = 'https://flynn.boolean.careers/exercises/api/array/music';
window.addEventListener('load', displayAlbum);

function displayAlbum() {
    axios
        .get(endpoint)
        .then((value) => {
            const album = value.data.response;
            console.log(album);
            for(let i = 0; i < album.length; i++){
                createCard(i);
                createImg(album[i], i);
                createCardBody(i);
                createtitle(album[i], i);
                createAuthor(album[i], i);
                createYear(album[i], i);
                createhr(i);
                createGenre(album[i], i);
            }
        })
        .catch((errore) => {
            console.log(errore);
        });
}

function createCard (i){
    const divCard = document.createElement('div');
    divCard.className = 'card me-3';
    divCard.id = 'card' + i.toString();
    divCard.style.width = "24rem";
    document.getElementById('gallery').appendChild(divCard);
}

function createImg (album, i){
    const img = document.createElement('img');
    img.className= 'card-img-top pt-4 p-2';
    img.setAttribute('src', album.poster);
    const id = 'card' + i.toString();
    document.getElementById(id).appendChild(img);
}

function createCardBody (i){
    const divCardBody = document.createElement('div');
    divCardBody.className = 'card-body';
    divCardBody.id = 'cardBody' + i.toString();
    const id = 'card' + i.toString();
    document.getElementById(id).appendChild(divCardBody);
}

function createtitle (album, i){
    const h3 = document.createElement('h3');
    h3.className = 'card-title';
    console.log(album.title);
    h3.innerHTML = album.title;
    const id = 'cardBody' + i.toString();
    document.getElementById(id).appendChild(h3);
}

function createhr (i){
    const hr = document.createElement('hr');
    const id = 'cardBody' + i.toString();
    document.getElementById(id).appendChild(hr);
}

function createAuthor (album, i){
    const h5 = document.createElement('h5');
    h5.className = 'card-text d-inline';
    h5.innerHTML = album.author;
    const id = 'cardBody' + i.toString();
    document.getElementById(id).appendChild(h5);
}

function createYear(album, i){
    const h6 = document.createElement('h6');
    h6.className = 'card-text d-inline';
    h6.innerHTML = ' — ' + album.year;
    const id = 'cardBody' + i.toString();
    document.getElementById(id).appendChild(h6);
}

function createGenre(album, i){
    const h6 = document.createElement('h6');
    h6.className = 'card-text';
    h6.innerHTML = album.genre;
    const id = 'cardBody' + i.toString();
    document.getElementById(id).appendChild(h6);
}