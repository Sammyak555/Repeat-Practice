// fill in javascript code here

let formtag=document.querySelector("form").addEventListener('submit',myfn)
let emparr=JSON.parse(localStorage.getItem("empdata"))||[]
let container=document.querySelector("tbody")
window.addEventListener('load',()=>{
    displaydata(emparr)
})

function myfn(e){
    e.preventDefault();
    let name=document.getElementById("name").value
    let ID=document.getElementById("employeeID").value
    let department=document.getElementById("department").value
    let exp=document.getElementById("exp").value
    let email=document.getElementById("email").value
    let mbl=document.getElementById("mbl").value
    let userObj={
        name:name,
        id:ID,
        department:department,
        exp:exp,
        email:email,
        number:mbl
    }
    emparr.push(userObj)
    console.log(emparr)
    displaydata(emparr)
    localStorage.setItem("empdata",JSON.stringify(emparr))
}

function displaydata(emparr){
    container.innerHTML=null
    emparr.forEach((el,index) => {
       let tr= document.createElement("tr")
       let td1=document.createElement("td")
       td1.innerText=el.name
       let td2=document.createElement("td")
       td2.innerText=el.id
       let td3=document.createElement("td")
       td3.innerText=el.department
       let td4=document.createElement("td")
       td4.innerText=el.exp
       let td5=document.createElement("td")
       td5.innerText=el.email
       let td6=document.createElement("td")
       td6.innerText=el.number
       let td7=document.createElement("td")
       if(el.exp>5){
        td7.innerText="Senior"
       }else if(el.exp>1&&el.exp<=5){
        td7.innerText="Junior"
       }else{
        td7.innerText="Fresher"
       }
       let btn=document.createElement("button")
       btn.innerText="Delete"
       btn.addEventListener('click',()=>{
        deletefn(index)
       })
       tr.append(td1,td2,td3,td4,td5,td6,td7,btn)
       container.append(tr)
    });

}

function deletefn(index){
    console.log(emparr)
    emparr.splice(index,1)
    console.log(emparr)
    localStorage.setItem("empdata",JSON.stringify(emparr))
    window.location.reload()
}
console.log(emparr)