// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time



function buyticket(){
    let data=JSON.parse(localStorage.getItem("movie"));
    console.log(data);
    append(data);
}
function append(data){
    let cont=document.getElementById("movie");

    data.forEach((el) => {
        let img=document.createElement("img");
        img.src=el.Poster;
        let tit=document.createElement("h3");
        tit.innerText=el.Title;
        let div=document.createElement("div");
        div.append(img,tit);
        cont.append(div);
    });
}
buyticket();

let confirm=()=>{
    
}