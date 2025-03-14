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