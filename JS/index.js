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
// display videos
const displayVideos = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
  const data = await res.json()
  const videoData = data.videos;
  videoData.forEach(element => {
    // time calculation
    const time = element.others.posted_date;
    const hour = parseInt(time / 3600);
    const timeMinute = time % 3600;
    const minute = parseInt(timeMinute / 60);
    const second = timeMinute % 60;


    const contentContainer = document.getElementById("content-container")
    const card = document.createElement("div")
    card.innerHTML = `
        <div class="card bg-base-100 shadow-sm">
           <figure class="relative">
             <img class=" h-48 w-96 object-cover"
               src="${element.thumbnail}"
               alt="Videos" />
               <div style="${time ? 'display:block' : 'display:none'}" class="absolute bg-slate-900 text-white text-[12px] p-1 rounded-sm bottom-1 right-2">${hour} hr ${minute} min ${second} second ago </div>
           </figure>
           <div class="p-2 space-y-2 flex gap-3 items-start">
           <img class="w-10 h-10 rounded-full object-cover" src="${element.authors[0].profile_picture}"/>
           <div class="">
             <h2 class=" font-bold">${element.title}</h2>
             <p class="text-sm flex items-center gap-2">${element.authors[0].profile_name}<span>${element.authors[0].verified ? '<img class="w-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="" />' : ""}</span></p>
             <p class="text-sm font-semibold">${element.others.views}</p>
           </div>             
           </div>
         </div>
        `
    contentContainer.append(card)

  });
}
displayVideos()