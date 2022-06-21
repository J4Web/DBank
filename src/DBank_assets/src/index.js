import {DBank} from '../../declarations/DBank'

window.addEventListener("load", async ()=>{
  await DBank.compound();
  console.log("Page loaded!!");
  const  data = Math.round((await DBank.readData())*100)/100;
  console.log(data);
  const  val=document.getElementById("value");
  console.log(val);
  console.log(val.innerHTML);
  val.innerHTML=data;
})

document.querySelector("form").addEventListener("submit", async (e)=>{
  e.preventDefault();
  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const withDrawAmount = parseFloat(document.getElementById("withdrawal-amount").value);
  const btn= document.getElementById("submit-btn");
  btn.setAttribute("disabled",true);
console.log(withDrawAmount);
if(document.getElementById("input-amount").value.length!=0){
  await DBank.topup(inputAmount );
}
if(document.getElementById("withdrawal-amount").value.length!=0){
  await DBank.withDraw(withDrawAmount);
}
  const currBal= Math.round((await DBank.readData())*100)/100;
  const dta = document.getElementById("value");
  dta.innerText=currBal;
  btn.removeAttribute("disabled");
  document.getElementById("input-amount").value="";
  document.getElementById("withdrawal-amount").value="";

})