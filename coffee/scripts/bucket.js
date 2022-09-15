// On clicking remove button the item should be removed from DOM as well as localstorage.
let list=JSON.parse(localStorage.getItem("coffee"))||[];
let amount=0;

append(list);
function append(data)
{
    let container=document.getElementById("bucket");
    data.forEach(function(ele,index){
        let title=document.createElement("h2");
        title.innerText=ele.title;
        let price=document.createElement("p");
        price.innerText=ele.price;
        amount=amount+ele.price;
        let total=document.getElementById("total_amount");
        total.innerText=amount;
        let image=document.createElement("img");
        image.src=ele.image;
        let btn=document.createElement("button");
        btn.innerText="Remove";
        btn.setAttribute("id","remove_coffee");

        btn.addEventListener("click",function(){
            removeitem(ele,index);
        })
        let div=document.createElement("div");
        div.append(image,title,price,btn);
        container.append(div);

    })
}
function removeitem(ele,index)
{
    list.splice(index,1);
    localStorage.setItem("coffee",JSON.stringify(list));
    window.location.reload();
 
}
