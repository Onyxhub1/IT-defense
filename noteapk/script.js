const noteContainer = document.querySelector('.notepad');
const createBtn = document.querySelector('.btn');

let Pnotes = document.querySelectorAll('.notes')

createBtn.addEventListener("click", ()=>{
    let inputBox= document.createElement("p");
    let img= document.createElement("img");


    inputBox.className = "notes";
    inputBox.setAttribute( "contenteditable","true");
    img.src = "delete.png"
    noteContainer.appendChild(inputBox).appendChild(img);
    

})
noteContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }




})