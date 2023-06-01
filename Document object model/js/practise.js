var tr=document.getElementsByTagName("tr")[0]
tr.firstElementChild.addEventListener("click",function()
{
     tr.firstElementChild.textContent/=2
    
})
tr.lastElementChild.addEventListener("click",function()
{
    tr.lastElementChild.textContent/=2
})
var sec=tr.children[1]
sec.addEventListener("click",function()
{
   sec.style.backgroundColor="pink" 
})


