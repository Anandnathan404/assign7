var gp=document.getElementById("grand_parent")
gp.addEventListener("click",function(val)
{
    gp.style.backgroundColor="green"
    console.log("gp clicked")
    console.log(val)
    console.log("eventphase ="+val.eventPhase)
    console.log(val.type)
    // console.log(val.target)
})

var p=document.getElementById("parent")
p.addEventListener("click",function(val)
{
    p.style.backgroundColor="red"
    console.log("p clicked")
    console.log("eventphase ="+val.eventPhase)
    console.log(val.type)
    // console.log(val.target)
    val.stopPropagation()

})

var c=document.getElementById("child")
c.addEventListener("click",function(val)
{
    c.style.backgroundColor="yellow"   
     console.log("c clicked")
     console.log("eventphase ="+val.eventPhase)
     console.log(val.type)
    //  console.log(val.target)
    val.stopPropagation()

})