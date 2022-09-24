import navbar from "../conponents/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let dog=JSON.parse(localStorage.getItem("dog"))
console.log(dog)

getdata();

async function getdata(){
    let res=await fetch(`https://dog.ceo/api/breed/${dog}/images`);
    let data=await res.json();
    console.log(data)
    append(data.message)
    return data.message;
}
function append(data){
    let container=document.querySelector("#doggy");
    data.map((el)=>{
        let div=document.createElement("div");
        let image=document.createElement("img");
        image.src=el;
        div.append(image);
        container.append(div);
    })
}