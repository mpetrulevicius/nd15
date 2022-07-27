const tabs = document.getElementsByClassName("tab")
const buttons = document.getElementsByTagName("button")

for(var x of tabs){
    x.style.display = "none"
}

function changeHeader(evt, name){
 
   for(var x of tabs){
    x.style.display = "none"
   }
   document.getElementById(name).style.display = "block"

   for(var x of buttons){
    x.classList.remove("selected")
   }
   evt.currentTarget.classList.add("selected")
}