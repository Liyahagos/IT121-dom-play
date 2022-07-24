//alert ("HI");

function myAlert(){

    alert("clicked");
    
    }

const span  = document.querySelectorAll("#play span" );

console.log(spans);

for (const mySpan of spans) {
//mySpan.addEventListener("click",myAlert);
//alert(mySpan.dataset.actor);
mySpan.addEventListener("click",function(ev){
   // alert("THe current actor is" + mySpan.dataset.actor);
highlighActor(mySpan.datase.actor);
});
}









function highlighActor (actor) {

    for(const mySpan of spans) {

        if(actor== mySpan.dataset.actor){//current actor, highlight
            mySpan.style.backgroundColor=='yellow';
        }else{//other actor, bakcground white
            mySpan.style.backgroundColor=='white';
        }
    }
    
}
