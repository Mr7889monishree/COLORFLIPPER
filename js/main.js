var div=document.getElementById("change");
var colors=["red","yellow","green","black","purple","bisque","grey","white","aliceblue","darkblue"];
var currentIndex=0;


button.addEventListener("click",(event)=>{
    div.classList.remove(colors[currentIndex]);
    currentIndex=(currentIndex+1) % colors.length;
    div.classList.add(colors[currentIndex]);
    div.textContent="Background Color:"+colors[currentIndex];
})

