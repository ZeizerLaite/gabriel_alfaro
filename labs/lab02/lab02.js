const oldlist = document.getElementById("oldList")
const listItems = oldlist.querySelectorAll('li')
let showmore1 = document.getElementById("showmore1")
let showless1 = document.getElementById("showless1")

function unhide() {
    let current = 0;
    listItems.forEach(element => {
    if (current >= 7 && element.innerHTML != "Show less")
    {
        element.style.display = "list-item"
    } else if (current >=14)
    {
        showless1.style.display = "list-item"
        showmore1.style.display = "none"
    }
    current++
});
}

function hide(){
    let current = 0;
    listItems.forEach(element => {
    if (current >= 7 && element.innerHTML != "Show more")
    {
        element.style.display = "none"
    } else if (current >=14)
    {
        showless1.style.display = "none"
        showmore1.style.display = "list-item"
    }
    current++
}); 
}


showmore1.addEventListener('click', unhide)
showless1.addEventListener('click', hide) 

//falta cambiar la logica de display = none para que tenga animacion en la propuesta 