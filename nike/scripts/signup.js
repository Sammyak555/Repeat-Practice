
let users=JSON.parse(localStorage.getItem("users"))||[];
class user{
    constructor(name)
    {
        this.name=name;
    }
    signup(email,password)
    {
        let valid= false;
        valid=this.Validemail(email)&&this.validpassword(password);
        if(valid)
        {
            this.email=email;
            this.password=password;
            users.push(this);
            localStorage.setItem("users",JSON.stringify(users));
            alert(`${this.name}, Your are sucessfully signed in!`)
        }
        else{
            alert("follow rule of email and password");
        }

    }
    Validemail(email)
    {
        let filter=users.filter((ele)=>{
            return ele.email==email;
        })
        if(filter.length==0)
        {
            return true;
        }
        else{
            return false;
        }
    }
   validpassword(password)
    {
        return true;
    }

}
let myfunction=()=>{
    let form=document.getElementById("form");
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let s=new user(name);
    s. signup(email,password);
    
}