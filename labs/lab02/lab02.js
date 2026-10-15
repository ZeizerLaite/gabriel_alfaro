const oldlist = document.getElementById("oldList")
const listItemsold = oldlist.querySelectorAll('li')
const newlist = document.getElementById("newList")
const listItemsnew = newlist.querySelectorAll('li')
let showmore1 = document.getElementById("showmore1")
let showless1 = document.getElementById("showless1")
let showmore2 = document.getElementById("showmore2")
let showless2 = document.getElementById("showless2")

function unhide(type, listItems) {
    let current = 0;
    if (type == 1) {    
        listItems.forEach(element => {
            if (current >= 7 && element.innerHTML != "Show less") {
                element.style.display = "list-item"
            } else if (current >=14) {
                showless1.style.display = "list-item"
                showmore1.style.display = "none"
            }
            current++
        });
    } else if(type == 2) {
        listItems.forEach(element => {
            if (current >= 7 && element.innerHTML !== "Show more") {
                element.classList.remove("oculto")
                element.classList.add("mostrar")
                element.style.maxHeight = element.scrollHeight + "px"
            } else if (current >=14) {
                showmore2.style.display = "none"
            }
            current++
        });
        
        newlist.style.maxHeight = null;
        newlist.style.overflowY = null;
    }
}

function hide(type, listItems){
    let current = 0;
    if (type == 1){
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
}); } else if (type == 2) {
}
}


showmore1.addEventListener('click', (e) =>{
    unhide(1, listItemsold)
})
showless1.addEventListener('click', (e) =>{
    hide(1,listItemsold)
}) 

showmore2.addEventListener('click', (e) =>{
    unhide(2, listItemsnew)
})
showless2.addEventListener('click', (e) =>{
    hide(2,listItemsnew)
}) 

