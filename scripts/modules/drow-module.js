export function drowCard(key){
    if(key === 'cleaner'){
        getDataVC();
    }
    else{
        getDataCard(key);
    }
}
export function getDataCard(key) {
    let totalInfo = document.getElementsByClassName('row');

    fetch(`http://localhost:36155/good-search/${key}`)
    .then(response=>response.json())
    
    .then(data=>{
        for (let i = 0; i < 8; i++) {
            let col = document.createElement('div');
            col.className = 'col';

            let card = document.createElement('div');
            card.className = 'card h-100';

            let image = document.createElement('img');
            image.className = 'card-img-top';
            image.src = `http://localhost:36155/good-cards/${data[i].Image}`;

            let descriptionInfo = document.createElement('div');
            descriptionInfo.className = 'card-body';

            let header = document.createElement('h5');
            header.className = 'card-title';
            header.textContent = data[i].Title;

            let paragraph = document.createElement('p');
            paragraph.className = 'card-text';
            paragraph.textContent = data[i].Description;

            let paragraphPrice = document.createElement('p');
            paragraphPrice.className = 'card-text';
            let price = data[i].Price; 
            paragraphPrice.textContent = `Цена: ${price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}`;

            let a = document.createElement('a');
            a.className = 'btn btn-primary';
            a.href = '#';
            a.textContent = 'Подробнее';

            document.body.appendChild(col);
            col.appendChild(card);

            card.appendChild(image);

            descriptionInfo.appendChild(header);
            descriptionInfo.appendChild(paragraph);
            descriptionInfo.appendChild(paragraphPrice);
            descriptionInfo.appendChild(a);

            card.appendChild(descriptionInfo);

            totalInfo[0].appendChild(col);

        }
    });

}

export function getDataVC() {
    let container = document.getElementsByClassName('info');

    fetch("http://localhost:36155/good-cards")
    .then(response => response.json())
    .then(data => {
            
        let header = document.createElement('h2');
        header.className = 'text-center';
        header.textContent = data[24].Title; 
        container[0].appendChild(header); 
            
        let chapters = data[24].Description.split('\r\n');

        let image = document.createElement('img');
        image.className = 'img-fluid mt-4';
        image.src = `http://localhost:36155/good-cards/${data[24].Image}`;
        container[0].appendChild(image);

        let badgeCon = document.createElement('div');
        badgeCon.className = "d-flex justify-content-center mt-5";

        let span = document.createElement('span');
        span.className = "badge text-bg-secondary";
            
        badgeCon.appendChild(span);
        container[0].appendChild(badgeCon);
            
        for (let i = 0; i < chapters.length; i += 3) {
            let head = document.createElement('h3');
            head.className = 'lead';
                
            let boldTitle = document.createElement('strong');
            boldTitle.textContent = chapters[i];
            boldTitle.className='fw-bold';
            head.appendChild(boldTitle);

            let descr = document.createElement('p');

            descr.textContent = chapters[i + 1]; 

            container[0].appendChild(head);
            container[0].appendChild(descr);
        }
    });
}


