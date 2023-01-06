// Store the wallet amount to your local storage with key "amount"
function price(amt){
    this.amt=amt;
}
addtw=()=>{
    let amt=document.getElementById("amount").value;

    let p=new price(amt);
    let wallet=JSON.parse(localStorage.getItem("wallet"))||[];
    wallet.push(p);
    localStorage.setItem("wallet",JSON.stringify(wallet))
    console.log(wallet);
    let val=document.getElementById("wallet");
    val.innerText=amt;
}
