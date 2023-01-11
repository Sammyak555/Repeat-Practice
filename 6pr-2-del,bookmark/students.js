// All the Code for All Students Page Goes Here
let userarr=JSON.parse(localStorage.getItem("admission"))||[]
admitarr=JSON.parse(localStorage.getItem("admission-accepted"))||[]
rejarr=JSON.parse(localStorage.getItem("admission-rejected"))||[]
let container=document.querySelector("tbody")
window.addEventListener('load',()=>{
    displaytable(userarr)
})
console.log(userarr)
function displaytable(){
    container.innerHTML=null;
    userarr.forEach((el,index) => {
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
        let adbtn=document.createElement("button")
        adbtn.innerText="Admitted"
        adbtn.addEventListener('click',()=>{
            admitfn(index)
        })
        let rejbtn=document.createElement("button")
        rejbtn.innerText="Rejected"
        rejbtn.addEventListener('click',()=>{
            rejectfn(index)
        })
        tr.append(td1,td2,td3,td4,td5,adbtn,rejbtn)
        container.append(tr)
    });
}


function admitfn(index){
   let user= userarr.splice(index,1)
    localStorage.setItem("admission-accepted",JSON.stringify(user))
    localStorage.setItem("admission",JSON.stringify(userarr))
    window.location.reload()
}
function rejectfn(index){
    let user= userarr.splice(index,1)
     localStorage.setItem("admission-rejected",JSON.stringify(user))
     localStorage.setItem("admission",JSON.stringify(userarr))
     window.location.reload()
 }
