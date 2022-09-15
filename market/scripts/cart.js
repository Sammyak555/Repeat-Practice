
window.addEventListener("load",()=>{
    cont();
})
function cont(){
    mov=JSON.parse(localStorage.getItem("movie"))||[];

    append(mov);
    console.log(mov)
}
let append=(data)=>{
    let container=document.getElementById("container");
    let sum=0;
    data.forEach((el) => {
        sum+=Number(el.Year);
        let img=document.createElement("img");
        img.src=el.Poster;
        let tit=document.createElement("h3");
        tit.innerText=el.Title;
        let amt=document.createElement("h4");
        amt.innerText=el.Year;
        let btn = document.createElement("button");
        btn.innerText="remove";
        btn.onclick=()=>{
            rmvg(el);
        }
        let div=document.createElement("div");
        div.setAttribute('class','movie_tab');
        div.append(img,tit,amt,btn);
        container.append(div);
    });
    let total=document.getElementById("cart_total");
total.innerHTML=sum;

}


