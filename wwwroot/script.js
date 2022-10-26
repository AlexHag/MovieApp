var page = 0;

const buttonPrevious = document.querySelector('#previous');
const buttonNext = document.querySelector('#next');

buttonNext.addEventListener('click', () => {
    if(page < 4) {
        page += 1;
        fetch('./movies.json/')
        .then((response) => response.json())
        .then((json) => appendData(json, page));
        document.querySelector('#showing').textContent = `Showing ${page+1}/5`
    }
})

buttonPrevious.addEventListener('click', () => {
    if(page > 0) {
    page -= 1;
    fetch('./movies.json/')
    .then((response) => response.json())
    .then((json) => appendData(json, page));
    document.querySelector('#showing').textContent = `Showing ${page+1}/5`
    }
})

 
const appendData = (json, page) => {
    document.querySelector('#title-frame').textContent = json['movies'][page]['title'];
    document.querySelector('#description').textContent = json['movies'][page]['description'];
    document.querySelector('#img-frame').src = json['movies'][page]['img'];
}


fetch('./movies.json/')
    .then((response) => response.json())
    .then((json) => appendData(json, page));



