
let arr=[]
document.querySelector('form').addEventListener('submit',submitform)
let container=document.getElementById('container')
let userarr=JSON.parse(localStorage.getItem('userarr'))||[]
window.addEventListener('load',()=>{
    console.log(userarr)
    displaytable(userarr)
})
function submitform(e){
    e.preventDefault();
    let name=document.getElementById('name').value
    let mbl=document.getElementById('mbl').value
    let course=document.getElementById('course').value

    let userObj={
        username:name,
        usermbl:mbl,
        usercourse:course
    }
    userarr.push(userObj)
    console.log(arr)
    displaytable(userarr)
    localStorage.setItem("userarr",JSON.stringify(userarr))  
}

function displaytable(userarr){
    container.innerHTML=null
    userarr.forEach((el) => {
        var tr=document.createElement("tr")
    var td1=document.createElement("td")
    td1.innerText=el.username
    var td2=document.createElement("td")
    td2.innerText=el.usermbl
    var td3=document.createElement("td")
    td3.innerText=el.usercourse
    tr.append(td1,td2,td3)
    container.append(tr)
    });
}

