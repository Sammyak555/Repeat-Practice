// 1.staterendering
// 2.carddetails
// 3.handlesubmit

const data=[
    "AP",
     "MH",
     "HP",
     "HR",
     "KA",
     "GJ",
     "BR",
     "UK",
     "DL",
     "TN",
     "KL",
     "MP"
]

class Details{
    constructor(){

    }
    staterendering(data){
        const select=document.getElementById("statename")

        data.map((el)=>{
            const option=document.createElement("option");
            option.innerText=el;
            option.value=el;
            select.append(option);
        })
    }
    carddetails(){
        const value=document.getElementById("paymentmethod").value;
        const container=document.getElementById("carddetails")
        if(value!=="card"){
            container.innerHTML=null;
        }else{
            const html=`<label for="">Card Number</label>
            <input type="text" name="" id="cardnumber">
            <label for="">CVV</label>
            <input type="number" name="" id="cvv">
            <label for="">Expiry Date</label>
            <input type="date" name="" id="expdate">
            <label for="">Card Holder Name</label>
            <input type="text" name="" id="cardname">`
            container.innerHTML=html;
        }
    }

    handlesubmit(name,add1,add2,city,state,pin,phone,payment,cardname,cardnumber,cvv,expdate){
        // validation check
        //creating payload
        //making post req or storing locally
        const isvalidationckeck=this.#checkcvv(cvv)&&this.#isbasicdatapresent(name,add1,add2,city,state,pin,phone,payment);
        
        const payload={
            name,
            add1,
            add2,
            city,
            state,
            pin,
            phone,
            payment
        }
        
        if(payment==="card"){
            payload.carddatails={
                cardnumber,
                cvv,
                expdate,
                cardname
            }
        }
        console.log(payload)
        const price=JSON.parse(localStorage.getItem("orederdetails"))
       
        payload.totalprice=price;
         localStorage.setItem("orederdetails",JSON.stringify(payload));
        


    }
    navbarrendering(){

    }
    #checkcvv(cvv){
      if(cvv.length===3){
        return true;
      }else{
        return false;
      }
    }
    #isbasicdatapresent(name,add1,add2,city,state,pin,phone,payment){
        if(!name||!add1||!add2||!city||!state||!pin||!phone||!payment||!payment){
            alert("Fill all inputs");
            return false;
        }
        return true;
    }
}

const details=new Details();
// details.navbarrendering();
// details.staterendering();
// details.carddetails();
// Details.handlesubmit();

// where do we need to call these is imp

// FIRST WE CALL
// details.navbarrendering();
// import CODE

// SECOND WE CALL
details.staterendering(data);

// details.carddetails();====>after event onchange we are calling

const select=document.getElementById("paymentmethod");
    select.addEventListener("change", ()=>{
        details.carddetails();
    })


    const form=document.getElementById("detailsform");
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
// here we are calling conditionally
        const name=document.getElementById("name").value;
        const add1=document.getElementById("address1").value;
        const add2=document.getElementById("address2").value;
        const city=document.getElementById("city").value;
        const state=document.getElementById("statename").value;
        const  pin=document.getElementById("pin").value;
        const phone=document.getElementById("phone").value;
        const payment=document.getElementById("paymentmethod").value;
        
        if(payment!=="card"){
            details.handlesubmit(name,add1,add2,city,state,pin,phone,payment);
        }else{
        const cardnumber=document.getElementById("cardnumber").value;
        const cvv=document.getElementById("cvv").value;
        const expdate=document.getElementById("expdate").value;
        const cardname=document.getElementById("cardname").value;
        details.handlesubmit(name,add1,add2,city,state,pin,phone,payment,cardname,cardnumber,cvv,expdate);
        }

        details.handlesubmit();
    })
