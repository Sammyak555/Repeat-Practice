import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

window.addEventListener("load",()=>{
    prods();
})
let prods=()=>{

    let mobile_data=JSON.parse(localStorage.getItem("mobile_data"));
    append(mobile_data);
}
let append=(mobile_data)=>{
    let container=document.getElementById("mobile_list");

    mobile_data.forEach((el,index) => {
        
        let image=document.createElement("img");
        image.src=el.image;
        let brand=document.createElement("h2");
        brand.innerText=el.brand;
        let name=document.createElement("h3");
        name.innerText=el.name;
        let price=document.createElement("h3");
        price.innerText=el.price;

        let div=document.createElement("div");
        div.setAttribute("class","mobile");

        let btn=document.createElement("button");
        btn.innerText="Remove";
        btn.onclick=()=>{
            removing(index);
        }
        btn.setAttribute('class','remove');
        btn.style.cursor="pointer";
        div.append(brand,image,name,price,btn);
        container.append(div);

    });

    


    let removing=(index)=>{
         mobile_data.splice(index,1);
         localStorage.setItem("mobile_data",JSON.stringify(mobile_data));
         window.location.reload();
    }

}

window.addEventListener("change",()=>{
    sortbrand();
})
function sortbrand(){
    let query=document.getElementById("select_filter").value;
    let mobile_data=JSON.parse(localStorage.getItem("mobile_data"));
   let data= mobile_data.filter(function(ele){
    return ele.brand==query;
   });
//    window.location.reload();
   console.log(data);
   let container=document.getElementById("mobile_list");
   container.innerHTML=null;
   append(data);
}
let srtlh=document.getElementById("sort_lth");
srtlh.addEventListener("click",()=>{
    sortlh();
})
function sortlh(){
    let mobile_data=JSON.parse(localStorage.getItem("mobile_data"));
    let data=mobile_data.sort(function(a,b){
        return a.price-b.price;
    });
    console.log(data);
    let container=document.getElementById("mobile_list");
    container.innerHTML=null;
    append(data);

}

let srthl=document.getElementById("sort_htl");
srthl.addEventListener("click",()=>{
    sorthl();
})
function sorthl(){
    let mobile_data=JSON.parse(localStorage.getItem("mobile_data"));
    let data=mobile_data.sort(function(a,b){
        return b.price-a.price;
    });
    console.log(data);
    let container=document.getElementById("mobile_list");
    container.innerHTML=null;
    append(data);

}