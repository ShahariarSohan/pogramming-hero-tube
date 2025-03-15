// display button
const displayButton = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
  const data = await res.json()
  const categoryData = data.categories;
  categoryData.forEach(element => {
    const buttonContainer = document.getElementById("button-container")
    const button = document.createElement("div")
    button.innerHTML = `
              <button class="btn" onclick="displayVideos('${element.category_id}')">${element.category}</button>  
        `
    buttonContainer.appendChild(button)
  });
}
displayButton();

// display videos by category
const displayVideos = async (id) => {
  const contentContainer = document.getElementById("content-container")
  contentContainer.innerHTML = "";
  const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
  const data = await res.json()
  const videoData = data.category;
  if (videoData.length === 0) {
    contentContainer.classList.remove("grid")
    const div = document.createElement('div')
    div.innerHTML = `
    <div class=" w-1/2 mx-auto text-center text-lg font-bold space-y-5">
      <h2>No videos available</h2>
     <img  class="mx-auto" src="../assests/Icon.png"/>

    </div>
    `
    contentContainer.append(div)

  }
  else {
    contentContainer.classList.add("grid")
    videoData.forEach(element => {
      // time calculation
      const time = element.others.posted_date;
      const hour = parseInt(time / 3600);
      const timeMinute = time % 3600;
      const minute = parseInt(timeMinute / 60);
      const second = timeMinute % 60;
      // create a div
      const card = document.createElement("div")
      card.innerHTML = `
          <div class="card bg-base-100 shadow-sm">
             <figure class="relative">
               <img class=" h-48 w-96 object-cover"
                 src="${element.thumbnail}"
                 alt="Videos" />
                 <div style="${time ? 'display:block' : 'display:none'}" class="absolute bg-slate-800 text-white text-[12px] font-bold p-1 rounded-sm bottom-3 right-2">${hour} hr ${minute} min ${second} second ago </div>
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

}
// display all videos 
const displayAllVideos = async () => {
  const contentContainer = document.getElementById("content-container")
  contentContainer.innerHTML = "";
  contentContainer.classList.add("grid")
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
    // create a div
    const card = document.createElement("div")
    card.innerHTML = `
        <div class="card bg-base-100 shadow-sm">
           <figure class="relative">
             <img class=" h-48 w-96 object-cover"
               src="${element.thumbnail}"
               alt="Videos" />
               <div style="${time ? 'display:block' : 'display:none'}" class="absolute bg-slate-800 text-white text-[12px] font-bold p-1 rounded-sm bottom-3 right-2">${hour} hr ${minute} min ${second} second ago </div>
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
displayAllVideos()