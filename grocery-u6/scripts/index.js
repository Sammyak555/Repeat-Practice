// The items should be stored in local storage with key :- “items”
// API :- https://bigbasket-server.onrender.com/products
let list = JSON.parse(localStorage.getItem("items"))||[]
main();
window.addEventListener('load',function(){
    // console.log(list.length)
    let count=document.getElementById("item_count")
    count.innerHTML=`Items:${list.length}`
})
async function main(){
    let data=await getdata()
    console.log(data)
     append(data)
}

async function getdata (){
   let res = await fetch('https://bigbasket-server.onrender.com/products?_limit=15')
   let data=await res.json();
   return data;
}
function append(data){
    console.log(data)
    let container = document.getElementById('items')
    container.innerHTML=null
    data.forEach((el) => {
        let div = document.createElement('div')
        div.setAttribute("class","item")
        let img = document.createElement('img')
        img.src = el.image
        let h3 = document.createElement('h3')
        h3.innerText=el.name
        let price = document.createElement('h4')
        price.innerText=`Price: ${el.price}`
        let btn = document.createElement('button')
        btn.innerText="Add to Cart"
        btn.setAttribute("class","add_to_cart")

        btn.addEventListener('click',function(){
            addfn(el)
        })

        div.append(h3,img,price,btn)
        container.append(div)
    });
}


function addfn(el){
    list.push(el)
    localStorage.setItem("items",JSON.stringify(list))
    window.location.reload()
}