import { OnInit } from "@angular/core";
class User{
  fname:String;
  lname:String;
  pnumber:String;
  email:String;
  dbirth:String;
  pcode:String;
  city:String;
  country:String;
  constructor(fname:String,lname:String,pnumber:String,email:String,dbirth:String,pcode:String,city:String,country:String){
          this.fname=fname;
          this.lname=lname;
          this.pnumber=pnumber;
          this.email=email;
          this.dbirth=dbirth;
          this.pcode=pcode;
          this.city=city;
          this.country=country;

  }


}

//u:new User(fname, lname,pnumber,email,dbirth,pcode,city,country);

function printdata(fname:String,lname:String,pnumber:String,email:String,dbirth:String,pcode:String,city:String,country:String){
var S="''+fname+' '+lname+' '+email+' '+pnumber+' '+dbirth+ '' +pcode+ '' +city+ ''+country+";


var c = document.getElementById("write") as HTMLInputElement | null;
if(c!=null){
    c.innerHTML="smdks";
}


}
let btnId=document.getElementById("submit");
function onClickBtn(){
  var c = document.getElementById("write") as HTMLInputElement | null;
if(c!=null){
    c.innerHTML="smdks";
}


}
function onClickBtn2()
{


const fname = document.getElementById("fname") as HTMLInputElement | null;
const lname = document.getElementById("lname") as HTMLInputElement | null;
const email = document.getElementById("email") as HTMLInputElement | null;
const pnumber = document.getElementById("pnumber") as HTMLInputElement | null;
const dbirth = document.getElementById("dbirth") as HTMLInputElement | null;
const pcode = document.getElementById("pcode") as HTMLInputElement | null;
const city = document.getElementById("city") as HTMLInputElement | null;
const country = document.getElementById("country") as HTMLInputElement | null;


 //if (fname != null && lname!=null && email!=null && pnumber !=null && dbirth !=null && pcode != null && city!=null && country != null ) {
  // 👉️ input has type HTMLInputElement here
  //printdata(fname.value,lname.value,email.value,pnumber.value,dbirth.value,pcode.value,city.value,country.value); // 👉️ "Initial value"
}


