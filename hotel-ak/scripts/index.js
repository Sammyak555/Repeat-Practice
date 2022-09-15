let search=async(event)=>{
    if(event.key=='Enter')
    {

    let data=await getData();        
      
    append(data)
    }
  
}
let logperson=JSON.parse(localStorage.getItem("logperson"));




let getData=async()=>{
    let query=document.getElementById("query").value;
    const url=`https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`
    let res=await fetch(url);
    let data=await res.json();
    return data.hotels;
}
let append=(data)=>{

    let container=document.getElementById("hotels_list");
    container.innerHTML=null;
    data.forEach((ele)=>{
        let image=document.createElement("img");
        image.src=ele.Images.one;
        let title=document.createElement("h4");
        title.innerText=`Name-${ele.Title}`;
        let price=document.createElement("p");
        price.innerText=`Price-${ele.Price}`
        let rating=document.createElement("p");
        rating.innerText=`Rating${ele.Rating}`;
        let ac=document.createElement("p");
        ac.innerText=`AC-${ele.Ac}`;
       let btn=document.createElement("button");
        btn.setAttribute("class","book");
        btn.addEventListener("click",()=>{
            if(logperson.length>0)
            {
                booking(ele);
            }
        })
        btn.innerText="book"
        let div=document.createElement("div");
        div.setAttribute("id","hotel");
        div.append(image,title,price,rating,ac,btn)
        container.append(div);

    })
}
let filter1=async()=>{
    let data=await getData();  
    let filter=data.filter((ele)=>{
        return ele.Ac==true;
    }) ;   
append(filter);
}
let filter2=async()=>{
    let data=await getData();  
    let filter=data.filter((ele)=>{
        return ele.Ac==false;
    }) ;   
append(filter);
}
let sort1=async()=>{
    let data=await getData();
   data= data.sort((a,b)=>{
        return a.Price-b.Price;
    })
    append(data);

}
let sort2=async()=>{
    let data=await getData();
   data= data.sort((a,b)=>{
        return b.Price-a.Price;
    })
    append(data);

}
let booking=(ele)=>{
    
}
