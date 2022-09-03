const display = () => {
    fetch(`https://openapi.programming-hero.com/api/news/category/01`)
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
                            <p class="card-text">${element.author}<small>${element.author.name}</small></p>
                            </div>
                            <div class="max-w-1xl">
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
display()




// const getAllNews = (allNews) => {
//     // console.log(allNews);
//    const displayAllNewsContainer = document.getElementById('test');
//     allNews.forEach(news => {
//         // console.log(news);
//         allNews = allNews.slice(0, 3);
//         const displayAllNewsDiv = document.createElement('div');
//         displayAllNewsDiv.classList.add('flex', 'flex-col', 'w-full', 'rounded-lg', 'bg-white', 'shadow-lg');
//         displayAllNewsDiv.innerHTML = `
//           <img class="w-full h-96 md:h-auto object-cover p-4 rounded-t-lg md:rounded-none md:rounded-l-lg" src=${news.image_url} alt="" />
//           <div class="p-6 flex flex-col justify-start">
//               <h5 class="text-gray-900 text-xl font-medium mb-2" id="news-title">${news.title}</h5>
//               <p class="text-gray-700 text-base mb-4">
//               ${news.details.slice(0, 300)}...
//               </p>
//             <div class="flex justify-around items-center">
//               <div class="flex justify-start mb-5">
//                 <div class="max-w-3xl">
//                   <div class="block rounded-lg  bg-white">
//                     <div class="md:flex md:flex-row align-center items-center">
//                       <div
//                         class="flex justify-start  mb-6 lg:mb-0 md:mx-0"
//                       >
//                         <img
//                           src="${news.author.img}"
//                           class="rounded-full shadow-md w-20"
//                           alt="woman avatar"
//                         />
//                       </div>
//                       <div class="md:ml-6">
//                         <p class="font-semibold mb-2 text-gray-800">${news.author.name}</p>
//                         <p class="text-xs">${news.author.published_date}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="flex justify-end mb-5">
//                 <div class="max-w-1xl">
//                 <i class="fas fa-eye"></i>
//                 <span>${news.total_view}k</span>
//                 </div>
//               </div>
//             </div>
  
          
//               <button onclick="loadModalData('${news._id}')" type="button" class="px-6
//   py-2.5
//   bg-blue-600
//   text-white
//   font-medium
//   text-xs
//   leading-tight
//   uppercase
//   rounded
//   shadow-md
//   hover:bg-blue-700 hover:shadow-lg
//   focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
//   active:bg-blue-800 active:shadow-lg
//   transition
//   duration-150
//   ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">
//   See Details
//   </button>
//           </div>
//       `;
//         displayAllNewsContainer.appendChild(displayAllNewsDiv);

//     })

// } 
