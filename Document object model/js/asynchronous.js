// console.log("start")

// console.log("a")

// setInterval(fun,5000)

// setTimeout(fun,5000)
// function fun()
// {
//     console.log("b")
// }
// console.log("c")
// console.log("end");


// var count=0
// var stopex;
// var flag=true

// function start()
// {
//     if(flag)
//     {
//     stopex=setInterval(function  ()
//     {
//         var h1=document.getElementById("abc")
//         h1.textContent=count++
//     },1000)
//     flag=false
//     }
// }
// function stop()
// {
//     if(flag==false)
//     {
//       clearInterval(stopex)
//       flag=true
//     }
// }


// var temp=0
// var starbtn=document.getElementById("startbtn")
// starbtn.addEventListener("click",start);
// var timing_on;

// function start()
// {
//     window.timing_on=setInterval(function()
//     {
//         var para=document.getElementById("abc")
//         para.textContent=temp++;

//     },1000)
//     starbtn.document.getElementById("st")
// }


// setInterval(showtime,1000)
// function showtime()
// {
//     var time=new Date()
//     var hour=24
//     var min=time.getMinutes()
//     var sec=time.getSeconds()
//     var am_pm="AM"

//     if(hour>=12)
//     {
//         am_pm='PM'
//         hour-=12
//     }
//     if(hour=0)
//     {
//         hour=12
//     }

//   var par=document.getElementById("abc")
//   .textContent=`${hour} :${min} :${sec} :${am_pm}`
// }


setInterval(show,1000)

function show()
{
    var time=new Date()

    var h2=document.getElementsByTagName("h2")

        var hour=time.getHours()
        var min=time.getMinutes()
        var sec=time.getSeconds()
        var am_pm="AM"
        if(hour>=12)
            {
                am_pm='PM'
                hour=hour-12
            }
            if(hour=0)
            {
                hour=12
            }
    
    
    h2[0].textContent=time.getHours()
    h2[1].textContent=min
    h2[2].textContent=sec
    h2[3].textContent=am_pm
    
       
}








