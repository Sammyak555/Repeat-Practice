// Add the coffee to local storage with key "coffee"
let list=JSON.parse(localStorage.getItem("coffee"))||[];

main();
let count=document.getElementById("coffee_count");
if(list.length==0)
{
    count.innerText="0";
}else{
    count.innerText=list.length;
}
async function main()
{
    let data=await getdata();
    append(data);
    console.log(data);
}
async function getdata()
{
    const url=`https://masai-api.herokuapp.com/coffee/menu`;
    let res=await fetch(url);
    let data=await res.json();
    return data.menu.data;

}
function append(data)
{
    let container=document.getElementById("menu");
    data.forEach(function(ele){
        let title=document.createElement("h2");
        title.innerText=ele.title;
        let price=document.createElement("p");
        price.innerText=ele.price;
        let image=document.createElement("img");
        image.src=ele.image;
        let btn=document.createElement("button");
        btn.innerText="Add to bucket";
        btn.setAttribute("id","add_to_bucket");

        btn.addEventListener("click",function(){
            additem(ele);
        })
        let div=document.createElement("div");
        div.setAttribute("class","coffee");
        div.append(image,title,price,btn);
        container.append(div);

    })
}
function additem(ele)
{
list.push(ele);
localStorage.setItem("coffee",JSON.stringify(list));
window.location.reload();
}
let srt=document.getElementById("srtlh");
async function srtlth(){
    let data=await getdata();
    data.sort(function(a,b){
        return b.price-a.price;
    }) 
    let container=document.getElementById("menu");
    container.innerHTML=null;
    append(data);
    console.log(data)
}

async function filtgr(){
    let data=await getdata();
    let pri;
    data.forEach((el)=>{
         pri=el.price;
         if(pri>=500){
            let container=document.getElementById("menu");
            container.innerHTML=null;
            console.log(el)
         }
    })
    
}