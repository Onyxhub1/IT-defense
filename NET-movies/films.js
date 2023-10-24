const arrows= document.querySelectorAll(".arrow1")
const movielists= document.querySelectorAll(".movie-list")

arrows.forEach((arrow,i)=>{
    const itemNumber = movielists[i].querySelectorAll("img").length;
    let clickCounter = 0;

    arrow.addEventListener("click",()=>{
        clickCounter++;
        if( itemNumber-(4 + clickCounter)>=0){
            movielists[i].style.transform = `translateX(${movielists[i].computedStyleMap().get("transform")[0].x.value -170}px)`
        }else{
            movielists[i].style.transform =  "translateX(0)";
            clickCounter=0;
        }
       
    })

    setInterval(() => {
        clickCounter++
        if( itemNumber-(4 + clickCounter)>=0){
            movielists[i].style.transform = `translateX(${movielists[i].computedStyleMap().get("transform")[0].x.value -170}px)`
        }
        
        else{
            movielists[i].style.transform =  "translateX(0)";
            clickCounter=0;
        }
    }, 8000)
   console.log(movielists[i].querySelectorAll("img").length)
})
