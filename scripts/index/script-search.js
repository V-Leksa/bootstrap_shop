export function searchGood () {
    let searchItem = new Array();

    searchItem = localStorage.getItem('0');

    console.log(searchItem);
    
    //let informationCard = JSON.parse(searchItem);
    let totalInfo = document.getElementsByClassName('row row-cols-1 row-cols-md-4 g-3');
    
    fetch(`http://localhost:36155/good-search/${searchItem}`)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
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
            paragraphPrice.textContent = data[i].Price;
        
            let a = document.createElement('a');
            a.className = 'btn btn-primary';
            a.href = '#';
            a.textContent = 'Подробнее';
        
            document.body.appendChild(col);
            col.appendChild(card);
        
            card.appendChild(image);
        
            descriptionInfo.appendChild(header);
            descriptionInfo.appendChild(paragraph);
            descriptionInfo.appendChild(a);
        
            card.appendChild(descriptionInfo);
        
            totalInfo[0].appendChild(col);
         }
    }
    );    
}

export function search() {
    let searchButton = document.getElementById('search-button');
    let searchInformation = document.getElementById('search-information');


    searchButton.addEventListener('click', () => {
      fetch(`http://localhost:36155/good-search/${searchInformation.value}`)
        .then(response => response.json())
        .then(data => localStorage.setItem('0', searchInformation.value));
    });
}






