// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let d;
let  main=async()=>{
    let data=await getdata();
    append(data);
}
let getdata=async()=>{
    let query=document.getElementById("search").value;
    let url=`https://www.omdbapi.com/?apikey=a0781364&s=${query}`;
    let res=await fetch(url);
    let data=await res.json();
    return data.Search;
}

function append(data){
    let container=document.getElementById("movies");
    container.innerHTML=null;
    data.forEach((el) => {
        let img=document.createElement("img");
        img.src=el.Poster;
        let tit=document.createElement("h3");
        tit.innerText=el.Title;
        let btn = document.createElement("button");
        btn.innerText="Book_Now";
        btn.onclick=()=>{
            bookit(el);
        }
        let div=document.createElement("div");
        div.setAttribute('class','movie_tab');
        div.append(img,tit,btn);
        container.append(div);
    });
}
let bookit=(data)=>{
    localStorage.setItem("movie",JSON.stringify(data));
    window.location.href="checkout.html";
}
function debouncing(fun,delay){
    if(d){
        clearTimeout(d);
    }
    d=setTimeout(() => {
        fun();
    }, delay);
}