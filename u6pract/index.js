
let arr=[]
document.querySelector('form').addEventListener('submit',submitform)
let container=document.getElementById('container')

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
    arr.push(userObj)
    console.log(arr)
    displaytable(arr)
    
}
function displaytable(arr){
    container.innerHTML=null
    arr.forEach((el) => {
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
