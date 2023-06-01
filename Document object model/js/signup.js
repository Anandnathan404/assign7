function vfn()
{
    var fn=document.getElementById("fn").value
    var p=document.getElementById("vfn")
    if(fn.length<5)
    {
        p.style.visibility="visible"
        p.textContent="Invalid user fullname!!!!!!!"
        p.style.color="red"
    }
    else
    {
        p.style.visibility="visible"
        p.textContent="Valid user fullname!!!!!!!!!"
        p.style.color="green"
    }
}

function vag()
{
    var fn=Number(document.getElementById("age").value)
    var p=document.getElementById("vag")
    if(fn<10)
    {
        p.style.visibility="visible"
        p.textContent="Invalid user Age!!!!!!!"
        p.style.color="red"
    }
    else 
    {
        p.style.visibility="visible"
        p.textContent="Valid user Age!!!!!!!!!"
        p.style.color="green"
    }
}

function vmob()
{
    var fn=String(document.getElementById("Mobile").value)
    var p=document.getElementById("vmo")
    if(fn.length!=10)
    {
        p.style.visibility="visible"
        p.textContent="Invalid user Mobile number!!!!!!!"
        p.style.color="red"
    }
    else 
    {
        p.style.visibility="visible"
        p.textContent="Valid user Mobile number!!!!!!!!!"
        p.style.color="green"
    }
}
function vpass()
{
    var fn=String(document.getElementById("pass").value)
    var p=document.getElementById("vpass")
    if(fn.length<5)
    {
        p.style.visibility="visible"
        p.textContent="Invalid Password!!!!!!!"
        p.style.color="red"
    }
    else 
    {
        p.style.visibility="visible"
        p.textContent="Valid user password!!!!!!!!!"
        p.style.color="green"
    }
}

function vcpass()
{
    var fn=String(document.getElementById("pass").value)
    var cn=String(document.getElementById("cpass").value)
    var p=document.getElementById("vcpass")
    if(fn!=cn)
    {
        p.style.visibility="visible"
        p.textContent="Password does not match!!!!!!!"
        p.style.color="red"
    }
    else 
    {
        p.style.visibility="visible"
        p.textContent="Password matched!!!!!!!!!"
        p.style.color="green"
    }
}


function show()
{
    var cn=document.getElementById("cpass")
    var type=cn.getAttribute('type')
    if(cn.type=='password')
    {
        cn.type="text"
    }
    else if(cn.type =='text')
    {
        cn.type="password"
    }
}
function show1()
{
    var cn=document.getElementById("pass")
    var type=cn.getAttribute('type')
    if(cn.type=='password')
    {
        cn.type="text"
    }
    else if(cn.type =='text')
    {
        cn.type="password"
    }
}