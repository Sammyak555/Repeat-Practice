let form=document.querySelector("form");
form.addEventListener("submit",myfunction());
let a,b,c,d;
function myfunction()
{
    if(a||b||c||d)
    {
        clearTimeout(a,b,c,d)
    }
    alert("Your order is confirmed");
  a=setTimeout(function()
  {
    alert("Your order is being Packed");
  },3000);
  b=setInterval(function()
  {
    alert("Your order is in transit");
  },8000);
  c=setInterval(function()
  {
    alert("Your order is out for delivery");
  },10000);
  d=setInterval(function()
  {
    alert("Order delivered");
  },12000);
};