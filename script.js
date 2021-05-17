var modalbg=document.querySelector(".modal-bg");
var modalbtn=document.querySelector(".modalbtn")
modalbtn.addEventListener("click", function(){
    modalbg.classList.add('bg-visible');
})
var modalclose=document.querySelector(".modal-close") 
modalclose.addEventListener("click", function(){
    modalbg.classList.remove('bg-visible');
})




    //for rating 
    const stars=document.querySelectorAll(".star");
    const output=document.querySelector(".output");

    for (var i=0;i<stars.length;i++){
        stars[i].starValue=i+1;
    }
    for (var i=0;i<stars.length;i++){
        let starValue=this.starValue;
        stars[i].addEventListener("click",function(){
            for (var i=0;i<stars[i].starValue;i++){
            stars[i].classList.add("orange");
        }
        // ["click","mouseover","mouseout"].forEach(function(e){
        //         stars[x].addEventListener(e,showRating);
        // })  
    })
}
    // function showRating(starValue){
    //     // let type=e.type;
    //     // let starValue=this.starValue;
    // }