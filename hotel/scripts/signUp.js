let form=document.getElementById("submit");
form.addEventListener("click",myfunction);
function myfunction(event)
{       event.preventDefault();
        let name=document.getElementById("name").value;
        let id=document.getElementById("id").value;
        let username=document.getElementById("username").value;
        let password=document.getElementById("password").value;
        
        let s = new student(name,id);
            s.signUp(username,password);
        }
       
function check()
{ 

let username=form.uname.value;
let password=form.upassword.value;
let u=new user();
u.signIn(username,password)

}
let users=JSON.parse(localStorage.getItem("Masai"))||[];
console.log(users)
class user{
    constructor(name,id)
    {
        this.name=name;
        this.id=id;
        
        
        
    }
    signUp(username,password)
    {
        let valid=false;
        valid= this.vaildUsername(username)&&this.validPassword(password);
        if(valid)
        {
            this.username=username;
            this.password=password;
           
            console.log("user resister successfully");
            users.push(this);
            localStorage.setItem("Masai",JSON.stringify(users));
        }else{
            console.log("folow rule for username and password");
        }

       
    }
    vaildUsername(username)
        {
            return true;
        }
   validPassword(password)
        {
            return true;
        }
    signIn(username,password)
    {
          let filter=users.filter((ele)=>{
          return username===ele.username&&password===ele.password;
         });
         console.log(filter);
        if(filter.length>0){
           alert("Sign In Successfull")
                localStorage.setItem("Admin",JSON.stringify(filter));
                window.location.href="admin.html"
         }
         else{
            alert ("Wrong password or username");
         }
        

    }
}
class student extends user{
    constructor(name,id){
        super(name,id);
    }

}
class Admin extends user{
    constructor(name,id){
        super(name,id);
    }

}