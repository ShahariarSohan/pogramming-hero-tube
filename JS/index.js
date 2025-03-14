// display button
const displayButton = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    const data = await res.json()
    const categoryData = data.categories;
    categoryData.forEach(element => {
        const buttonContainer = document.getElementById("button-container")
        const button = document.createElement("div")
        button.innerHTML = `
              <button class="btn">${element.category}</button>
          
        `
        buttonContainer.appendChild(button)
    });
}
displayButton();

const displayVideos = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    const data = await res.json()
    const videoData = data.videos;
    videoData.forEach(element => {
        const contentContainer = document.getElementById("content-container")
        const card = document.createElement("div")
        card.innerHTML = `
        <div class="card bg-base-100 shadow-sm">
           <figure>
             <img class=" h-48 w-96 object-cover"
               src="${element.thumbnail}"
               alt="Videos" />
           </figure>
           <div class="card-body">
             <h2 class="card-title">Card Title</h2>
             <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
           </div>
         </div>
        `
        contentContainer.append(card)

    });
}
displayVideos()