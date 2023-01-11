// All the JS Code for the Add Students Page Goes Here
document.querySelector("form").addEventListener("submit",myfn)

let userarr=JSON.parse(localStorage.getItem("admission"))||[]
function myfn(e){
    e.preventDefault();
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let phone=document.getElementById("phone").value
    let gender=document.getElementById("gender").value
    let course=document.getElementById("course").value
    
    let userObj={
        name:name,
        email:email,
        phone:phone,
        gender:gender,
        course:course
    }
    userarr.push(userObj)
    localStorage.setItem("admission",JSON.stringify(userarr))
    console.log(userarr)
    window.location.reload()
}