function add()
{
    var num1=document.getElementById("num1").value
    var num2=document.getElementById("num2").value
    var ans=Number(num1)+Number(num2)
    var res=document.getElementById("res")
    res.style.visibility="visible"
    var show=document.getElementById("Answer")
    show.textContent=`The Answer = ${ans}`
}
function sub()
{
    var num1=document.getElementById("num1").value
    var num2=document.getElementById("num2").value
    var ans=Number(num1)-Number(num2)
    var res=document.getElementById("res")
    res.style.visibility="visible"
    var show=document.getElementById("Answer")
    show.textContent=`The Answer = ${ans}`
}
function multi()
{
    var num1=document.getElementById("num1").value
    var num2=document.getElementById("num2").value
    var ans=Number(num1)*Number(num2)
    var res=document.getElementById("res")
    res.style.visibility="visible"
    var show=document.getElementById("Answer")
    show.textContent=`The Answer = ${ans}`
}
function div()
{
    var num1=document.getElementById("num1").value
    var num2=document.getElementById("num2").value
    var ans=Number(num1)/Number(num2)
    var res=document.getElementById("res")
    res.style.visibility="visible"
    var show=document.getElementById("Answer")
    show.textContent=`The Answer = ${ans}`
}
function reload()
{
    window.location.reload();
}