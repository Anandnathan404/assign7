var reg=document.getElementById("reg")
var loginsign=document.getElementById("loginsign")

var b1=document.getElementById("bt1")
var b2=document.getElementById("bt2")
var log=document.getElementById("log")
var sign=document.getElementById("sign")





reg.addEventListener("click",function(val)
{
   if(window.getComputedStyle(loginsign).visibility=="hidden")
   {
    loginsign.style.visibility="visible"
    
   }
   else
   {
    loginsign.style.visibility="hidden"

   }
   log.style.visibility="hidden"
   sign.style.visibility="hidden"
   val.stopPropagation()
})



bt1.addEventListener("click",function(val)
{
    log.style.visibility="visible"
    sign.style.visibility="hidden"
    val.stopPropagation()

})

bt2.addEventListener("click",function(val)
{
    sign.style.visibility="visible"
    log.style.visibility="hidden"
    val.stopPropagation()

})
var main=document.getElementById("main")
main.addEventListener("click",function(val)
{
    
   loginsign.style.visibility="hidden"
   log.style.visibility="hidden"
   sign.style.visibility="hidden"

   val.stopPropagation()
})
log.addEventListener("click",function(val)
{

    val.stopPropagation()
})

sign.addEventListener("click",function(val)
{

    val.stopPropagation()
})
