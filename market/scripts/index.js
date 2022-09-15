
 window.addEventListener("load",()=>{
    myfun();
 })

 let myfun=async()=>{
    let res=await fetch("https://www.omdbapi.com/?apikey=a0781364&s=thor");
    let data=await res.json();
   //  console.log(data.Search)
    append (data.Search);
    return data.Search;
 }

 let append=(data)=>{
   let container=document.getElementById("container");
    container.innerHTML=null;
    data.forEach((el) => {
        let img=document.createElement("img");
        img.src=el.Poster;
        let tit=document.createElement("h3");
        tit.innerText=el.Title;
        let amt=document.createElement("h4");
        amt.innerText=el.Year;
        let btn = document.createElement("button");
        btn.innerText="Book_Now";
        btn.onclick=()=>{
            bookit(el);
        }
        let div=document.createElement("div");
        div.setAttribute('class','movie_tab');
        div.append(img,tit,amt,btn);
        container.append(div);
    });

 }
 let dat=JSON.parse(localStorage.getItem("movie"))||[];
 let bookit=(data)=>{
   let wallet=document.getElementById("wallet");
   let val=Number(wallet.innerText)-Number(data.Year);
   if(val>0){
      wallet.innerText=val;
      dat.push(data); 
      
   }else{
      alert("low Budget!!!");
   }
   console.log(data)
   localStorage.setItem("movie",JSON.stringify(dat));
   }
   
     

   