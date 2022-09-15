//store the products array in localstorage as "data"
let formtag=document.querySelector("form");
formtag.addEventListener("submit",myfunction);
let data=JSON.parse(localStorage.getItem("prod"))||[];
function myfunction(event){
    event.preventDefault();

    let brand=product_form.product_brand.value;
    let name=product_form.product_name.value;
    let price=product_form.product_price.value;
    let image=product_form.product_image.value;

    let product=new objfun(brand,name,price,image)
    data.push(product);
console.log(data);
    localStorage.setItem("prod",JSON.stringify(data))
}

function objfun(b,n,p,i){
    this.brand=b;
    this.name=n;
    this.price=p;
    this.image=i;
}