/*
Use local storage as your database. And store data with key as "mobile_data". The mobile object will be :-
{
brand: String,
name: String,
price: Number,
image: String
}

Example:- 
{
brand: "apple", (oneplus/nokia)
name: "Iphone 13",
price: 74000,
image: "https://www.iphone.com/image.jpg"
}

*/
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let submit=document.getElementById("submit")
submit.addEventListener("click",()=>{
    forms();
})

function Product(brand,name,price,image){
    this.brand=brand,
    this.name=name,
    this.price=price,
    this.image=image
}

let forms=()=>{
    let brand=document.getElementById("mobile_brand").value;
    let name=document.getElementById("mobile_name").value;
    let price=document.getElementById("mobile_price").value;
    let image=document.getElementById("mobile_image").value;

    let p=new Product(brand,name,price,image);
    let mobile_data=JSON.parse(localStorage.getItem("mobile_data"))||[]
    mobile_data.push(p);
    localStorage.setItem("mobile_data",JSON.stringify(mobile_data));
    console.log(mobile_data);
    
}