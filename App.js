//yakalama fonks.
document.querySelector("form").addEventListener("submit", submitForm);
document.querySelector("ul").addEventListener("click",silVeyaYapıldı)
document.getElementById("clearAll").addEventListener("click", hepsiniSil);


function submitForm(e){
    let input = document.querySelector("input");
    if (input.value != "")
        listeyeEkle(input.value);
    input.value = "";   
    
}

function silVeyaYapıldı(e){
    if(e.target.name == "butonYapıldı")
        yapıldı(e);

    if(e.target.name == "butonSil")
        sil(e);
}

function hepsiniSil(e){
    document.querySelector("ul").innerHTML = "";
    
}

function listeyeEkle (event){
    let ul = document.querySelector("ul");
    let li = document.createElement("li");

    li.innerHTML = `
        <span class = "todo-item">${event}</span>
        <button name = "butonYapıldı"><i class="fa-solid fa-circle-check"></i></button>
        <button name = "butonSil"><i class="fa-solid fa-trash"></i></button>
    
    `;
    li.classList.add("todo-list-item");
    ul.appendChild(li);
}

function yapıldı(e){
    let item = e.target.parentNode;
    if(item.style.textDecoration == "line-through")
       item.style.textDecoration = "none"
    else
       item.style.textDecoration = "line-through"
    
}

function sil(e){
    let item = e.target.parentNode;
    item.addEventListener("transitionend", function(){

    })
    
    item.classList.add("todo-list-item-fall");
}






