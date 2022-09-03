const display = () => {
    fetch(`https://openapi.programming-hero.com/api/news/category/01`)
        .then(response => response.json())
        .then(data => displayShow(data.data))
}

const displayShow = (dat) => {
    const containerField = document.getElementById('test')
    dat.forEach(element => {
        const portalDiv = document.createElement('div')
        portalDiv.classList.add('row')
        portalDiv.innerHTML = `
        <div class="col-md-4">
                        <img src="${element.image_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${element.details.slice(0, 200)}...</p>
                            <p class="card-text">${element.author.image_url}<small>${element.author.name}</small></p>
                        </div>
                    </div>
        `;
        containerField.appendChild(portalDiv)
    });
}
display()