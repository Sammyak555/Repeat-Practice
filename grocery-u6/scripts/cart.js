let list = JSON.parse(localStorage.getItem("items"))||[]

function cartpage(){
    console.log(list)
    let container = document.getElementById('cart')
    container.innerHTML=null
    list.forEach((el,index) => {
        let div = document.createElement('div')
        div.setAttribute("class","item")
        let img = document.createElement('img')
        img.src = el.image
        let h3 = document.createElement('h3')
        h3.innerText=el.name
        let price = document.createElement('h4')
        price.innerText=`Price: ${el.price}`
        let btn = document.createElement('button')
        btn.innerText="Remove"
        btn.setAttribute("class","remove")

        btn.addEventListener('click',function(){
            removeitem(index)
        })

        div.append(h3,img,price,btn)
        container.append(div)
    
    });
}
cartpage()

function  removeitem(index){
    list.splice(index,1)
    localStorage.setItem("items",JSON.stringify(list))
    window.location.reload()
}