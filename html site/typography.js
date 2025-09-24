function find_edit_name(){
    const item  = document.getElementById('name')
    console.log(item.innerText)
    item.innerHTML="<b>Platon</b>"
}

function find_edit_surname(){
    const item = document.getElementById('surname')
    console.log(item.innerText)
    item.innerHTML="<b>Bukhtoiarov</b>"
}


const node_for_click_name = document.getElementById("for_click")
node_for_click_name.addEventListener("click",find_edit_name)

const node_click_surname = document.getElementById("for_click")
node_click_surname.addEventListener("click",find_edit_surname)
