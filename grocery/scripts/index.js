
let balance=document.getElementById("wallet").innerText;

async function main()
{
    let data=await getData();
    append(data);
}


async function getData()
{
    const url=`https://grocery-masai.herokuapp.com/items`;
    let res= await fetch(url);
    let data= await res.json();
    return data.data;
}
function append(data)
{
    let container=document.getElementById("groceries");
    data.forEach(function(ele,index)
    {
        let image=document.createElement("img");
        image.src=ele.image;
        let name=document.createElement("h2");
        name.innerText=ele.name;
        let price=document.createElement("h2");
        price.innerText=ele.price;
        let btn=document.createElement("button");
        btn.innerText="Add to Cart";
        btn.className="add_to_cart";
        btn.style.cursor="pointer";
        btn.addEventListener("click",function()
        {
           
             addItem(ele,index);
            
        });
        let div=document.createElement("div");
        div.className="item"
        div.append(image,name,price,btn);
        container.append(div);
    })
}
let arr=JSON.parse(localStorage.getItem("cart_items"))||[];
function addItem(ele,index)
{
    let name=ele.name;
    let image=ele.image;
    let price=ele.price;
    let data=new object(image,name,price);
  arr.push(data);
  localStorage.setItem("cart_items",JSON.stringify(arr));
let balance=document.getElementById("wallet").innerText;
document.getElementById("wallet").innerText=balance-ele.price;

}

function object(i,n,p)
{
    this.image=i;
    this.name=n;
    this.price=p;
}