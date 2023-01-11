// All the Code for All Students Page Goes Here
let userarr=JSON.parse(localStorage.getItem("admission"))||[]
let container=document.querySelector("tbody")
console.log(userarr)
function displaytable(){
    container.innerHTML=null;
    userarr.forEach((el) => {
        
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        td1.innerText=el.name
        let td2=document.createElement("td")
        td2.innerText=el.email
        let td3=document.createElement("td")
        td3.innerText=el.course
        let td4=document.createElement("td")
        td4.innerText=el.gender
        let td5=document.createElement("td")
        td5.innerText=el.phone
        tr.append(td1,td2,td3,td4,td5)
        container.append(tr)
    });
}
displaytable()