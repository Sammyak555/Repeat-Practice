let users=JSON.parse(localStorage.getItem("Masai"))||[];

function check(event)
{ 
   event.preventDefault();
   console.log(users);
let username=form.uname.value;
let password=form.upassword.value;
student.signIn(username,password);
}

class user{
    constructor(name,id)
    {
        this.name=name;
        this.id=id;
        
        
    }
   
    signIn(username,password)
    {  if(username==this.username&&password==this.password)
        {
            alert("Sign in");
        }
        else{
            alert("fail")
        }
    }
}
class student extends user{
    constructor(name,id){
        super(name,id);
    }

}
class Admin extends user{
    constructor(name,id)
    {
        super(name,id)
    }
}