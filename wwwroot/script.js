fetch('./movies.json/').then((response) => response.json()).then((json) => {

    var page = 0;

    const appendData = (id) => {
        document.querySelector('#title-frame').textContent = json['movies'][id]['title'];
        document.querySelector('#description').textContent = json['movies'][id]['description'];
        document.querySelector('#img-frame').src = json['movies'][id]['img'];
        document.querySelector('#showing').textContent = `Showing ${id+1}/10`
    }

    appendData(0);

    const buttonPrevious = document.querySelector('#previous');
    const buttonNext = document.querySelector('#next');

    buttonNext.addEventListener('click', () => {
        if(page < 9) {
            page += 1;
            appendData(page);
        }
    })

    buttonPrevious.addEventListener('click', () => {
        if(page > 0) {
            page -= 1;
            appendData(page);
        }
    })
});
