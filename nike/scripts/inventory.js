window.addEventListener("load",()=>{
    products();
})
let products=()=>{
    let data=JSON.parse(localStorage.getItem("prod"));
    append(data);
}

let append=(data)=>{
    let container=document.getElementById("products_data");
    data.forEach((el,index) => {
        let br=document.createElement("h3");
        br.innerText=el.brand;
        let nm=document.createElement("h3");
        nm.innerText=el.name;
        let pr=document.createElement("h3");
        pr.innerText=el.price;
        
        let imag=document.createElement("img");
        imag.src=el.image;
        let rmv=document.createElement("button");
        rmv.innerText="Remove"
        rmv.setAttribute("id","remove_product");
        rmv.onclick=()=>{
            removing(index)
        }

        let div=document.createElement("div");
        div.append(br,imag,nm,pr,rmv);
        container.append(div);
    });
    let removing=(index)=>{
        data.splice(index,1);
        localStorage.setItem("prod",JSON.stringify(data))
        window.location.reload();
    }

}

function srtlth(){
    let data=JSON.parse(localStorage.getItem("prod"));
    data.sort(function(a,b){
        return a.price-b.price;
    })
    let container=document.getElementById("products_data");
    container.innerHTML=null;
    append(data);
    console.log(data)
}
function srthtl()
{
    let data=JSON.parse(localStorage.getItem("prod"));
    data.sort(function(a,b){
        return b.price-a.price;
    }) 
    let container=document.getElementById("products_data");
    container.innerHTML=null;
    append(data);
}

function filtgr(){
    let data=JSON.parse(localStorage.getItem("prod"));
    let pri;
    data.forEach((el)=>{
         pri=el.price;
         if(pri>=10000){
            let container=document.getElementById("products_data");
            container.innerHTML=null;
            console.log(el)
            append(data);
         }
    })
    
    // if(data)
}

