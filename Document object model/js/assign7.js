function valid1()
{
    var un=String(document.getElementById("user_name").value)
    var vun=document.getElementById("vun")
    vun.style.fontWeight="bold"
    if(un.length<5)
    {
        vun.style.visibility="visible"
        vun.textContent=`"Enter valid User Name!!!!!!!!!!!!!!!!!!"`
        vun.style.color="red"
    }
    else
    {
        vun.style.visibility="visible"
        vun.textContent=`"User Name is valid!!!!!!!!!!!!!"`
        vun.style.color="green"
    }
}
function valid2()
{
    var un=String(document.getElementById("user_passord").value)
    var vun=document.getElementById("vup")
    vun.style.fontWeight="bold"
    if(un.length<5)
    {
        vun.style.visibility="visible"
        vun.textContent=`"Enter valid Password!!!!!!!!!!!!!!!!!!"`
        vun.style.color="red"
    }
    else
    {
        vun.style.visibility="visible"
        vun.textContent=`"User Password is valid!!!!!!!!!!!!!"`
        vun.style.color="green"
    }
}
function show()
{
    var cn=document.getElementById("user_passord")
    if(cn.type=='password')
    {
        cn.type="text"
    }
    else if(cn.type =='text')
    {
        cn.type="password"
    }
}