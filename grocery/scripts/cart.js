let arr=JSON.parse(localStorage.getItem("cart_items"))||[];
let balance=document.getElementById("“cart_total”");
dsiplayItem(arr);
let bag=0;
function dsiplayItem(data)
{    let bag=0;
    let container=document.getElementById("cart");
    data.forEach(function(ele,index)
    {
        let image=document.createElement("img");
        image.src=ele.image;
        let name=document.createElement("h2");
        name.innerText=ele.name;
        let price=document.createElement("h2");
        price.innerText=ele.price;
        bag=bag+ele.price;
       balance.innerText=bag;
        let btn=document.createElement("button");
        btn.innerText="remove";
        btn.className="remove";
        btn.style.cursor="pointer";
        btn.addEventListener("click",function()
        {
           remove(ele,index);
        })
        let div=document.createElement("div");
        div.className="item"
        div.append(image,name,price,btn);
        container.append(div);
});
}
function remove(ele,index)
{   let bag=balance.innerText;
    balance.innerText=bag-ele.price;
    arr.splice(index,1);
    localStorage.setItem("cart_items",JSON.stringify(arr));
    window.location.reload();
}
