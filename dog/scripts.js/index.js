import navbar from "../conponents/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

main();
async function main()
{
    let data=await getdata();
    append(data);
    console.log(data);
}
async function getdata()
{
    const url=`https://dog.ceo/api/breeds/list`;
    let res=await fetch(url);
    let data=await res.json();
    return data.message;

}
function append(data)
{
    let container=document.getElementById("breed");
    data.forEach(function(ele){
        
            let title=document.createElement("h2");
        title.innerText=ele;
        
      
        let div=document.createElement("div");
        div.addEventListener("click",function(){
            doggy(ele);
        })
       
        div.append(title);
        container.append(div);
    })
}
let dog=JSON.parse(localStorage.getItem("dog"))||[]
function doggy(data){
    localStorage.setItem("dog",JSON.stringify(data));
    window.location.href="puppy.html"
}




