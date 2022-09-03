const display = (category_id) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
        .then(response => response.json())
        .then(data => displayShow(data.data))
}

const displayShow = (data) => {
    const containerField = document.getElementById('test')
    data.forEach(element => {
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
                            <div class="d-flex">
                            <div>
                            <p class="card-text">
                            <img style="height: 50px; weight:50px;" src="${element.author.img}"/>
                            <small class="ms-3">${element.author.name}</small></p>
                            </div>
                            <div class="max-w-1xl mt-3 ms-5">
                            <div>
                            <i class="fas fa-eye"></i>
                             <span>${element.total_view}k</span>
                            </div>
                            </div>
        `;
        containerField.appendChild(portalDiv)
    });
}

document.getElementById('btn').addEventListener('click', function () {

})

// Loader part
display('02');