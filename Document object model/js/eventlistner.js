// function fun()
// {
//     var ename=prompt("Enter ename")
//     var div=document.createElement("div")
//     document.body.append(div)
//     var h1=document.createElement("h1")
//     h1.textContent=`Ename =${ename}`
//     div.appendChild(h1)
//     var loc=prompt("Enter Location")
//     var h2=document.createElement("h1")
//     h2.textContent=`Location =${loc}`
//     div.appendChild(h2)
//     div.style.backgroundColor="yellow"
//     div.style.border="1px solid black"
// }
// var name=prompt("Enter user Name")
// function fun()
// {

//     var h1=document.getElementsByTagName("h1")[0]
//     h1.textContent=`Good morning ${ename}`
//     document.body.append(h1)
// }
// function fun()
// {
// var num =prompt("How many animals you want to store?")
// var arr=new Array(num);
// var ul=document.createElement("ul")
// document.body.append(ul)
// for(i=0;i<Number(num);i++)
// {
//   arr[i]=prompt(`Enter animal ${i+1} name `)
//   if(arr[1]!=""&& isNaN(arr[i]))
//   {
//     var li=document.createElement("li")
//     ul.appendChild(li)
//     li.textContent=arr[i]
//   }
//   else
//   {
//     i--;
//   }
// }
// }
// let btn=document.getElementById("btn")

// btn.addEventListener("click",function ()
// {
//     let input1=document.getElementById("num1").value
//     let input2=document.getElementById("num2").value
//     let sum=Number(input1)+Number(input2)
//     let p=document.getElementById("para1")
//     p.textContent=`The answer is ${sum}`
// })
// btn.style.backgroundColor="yellow"
// btn.style.borderRadius="10px"
// btn.style.padding="10px"


function select_city()
{
    var select=document.getElementById("abc").value
    console.log(select)
    var res=document.getElementById("res")
    res.textContent=`your selected ${select}`
}
