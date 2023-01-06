// class details{

//     constructor(name){
//         this.name=name;
//     }
//     printname(){
//         console.log(name)
//     }

// }

// const Details=new details("masai school");
// console.log(Details)

//------------------------------------------------------------------------------------

// class details{

//     constructor(name){
//         this.name=name;
//     }
//     printname(){
//         console.log(this.name)
//     }
//     append(){

//     }
//     addtocart(){
        
//     }
// }

// const Details=new details("masai school");
// Details.printname();
// // masai school

// // -------------------------------------------------------------------------------------

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


const staterendering=(data)=>{
// where?
const select=document.getElementById("statename")

data.map((el)=>{
    const option=document.createElement("option");
    option.innerText=el;
    option.value=el;
    select.append(option);
})

}
staterendering(data);



const carddetails=()=>{
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
const select=document.getElementById("paymentmethod");
    select.addEventListener("change", carddetails)
 
    const handlesubmit=(event)=>{
        event.preventDefault();

        // take all values

        const name=document.getElementById("name").value;
        const add1=document.getElementById("address1").value;
        const add2=document.getElementById("address2").value;
        const city=document.getElementById("city").value;
        const state=document.getElementById("statename").value;
        const  pin=document.getElementById("pin").value;
        const phone=document.getElementById("phone").value;
        const payment=document.getElementById("paymentmethod").value;
        let cardnumber;
        let cvv;
        let expdate;
        let cardname;
        
        if(!name||!add1||!add2||!city||!state||!pin||!phone||!payment||!payment){
            alert("Fill all inputs");
            return;
        }
        if(payment==="card"){
         cardnumber=document.getElementById("cardnumber").value;
         cvv=document.getElementById("cvv").value;
         expdate=document.getElementById("expdate").value;
         cardname=document.getElementById("cardname").value;

            if(!cardnumber||!cvv||!expdate||!cardname){
                alert("Fill all card details");
                return;
            }
        }

        // if above both conditions pass
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
        localStorage.setItem("orederdetails",JSON.stringify(payload));
        
    }

    const form=document.getElementById("detailsform");
    form.addEventListener("submit",handlesubmit)
        
   
