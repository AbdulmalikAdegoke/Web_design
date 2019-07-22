var num;
var existing_num;
var x;
function sqr(){
  existing_num=document.getElementById('answer').innerHTML;
  var square=existing_num*existing_num;
  document.getElementById('equation').innerHTML="sqr("+existing_num+")";
  document.getElementById('answer').innerHTML=square;
}
function power(){
  existing_num=document.getElementById('answer').innerHTML;
  var square=existing_num*existing_num;
  document.getElementById('equation').innerHTML="sqr("+existing_num+")";
  document.getElementById('answer').innerHTML=square;
}
function sine(){
  existing_num=document.getElementById('answer').innerHTML;
  x=Math.sin(existing_num*Math.PI/180);
  document.getElementById('equation').innerHTML="sin("+existing_num+")";
  document.getElementById('answer').innerHTML=x;
}
function cos(){
  existing_num=document.getElementById('answer').innerHTML;
  x=Math.cos(existing_num*Math.PI/180);
  document.getElementById('equation').innerHTML="cos("+existing_num+")";
  document.getElementById('answer').innerHTML=x;
}
function tan(){
  existing_num=document.getElementById('answer').innerHTML;
  x=Math.tan(existing_num*Math.PI/180);
  document.getElementById('equation').innerHTML="tan("+existing_num+")";
  document.getElementById('answer').innerHTML=x;
}
function sqrt(){
  existing_num=document.getElementById('answer').innerHTML;
  document.getElementById('equation').innerHTML="√"+existing_num;
  document.getElementById('answer').innerHTML=Math.sqrt(existing_num);
}
function powerten(){
  existing_num=document.getElementById('answer').innerHTML;
  var ten=Math.pow(10,existing_num);
  document.getElementById('equation').innerHTML="10^"+existing_num;
  document.getElementById('answer').innerHTML=ten;
}
function log(){
  existing_num=document.getElementById('answer').innerHTML;
  x=Math.log(existing_num);
  document.getElementById('equation').innerHTML="log("+existing_num+")";
  document.getElementById('answer').innerHTML=x;
}
function exp(){

}
function mod(){
  existing_num=document.getElementById('answer').innerHTML;
  if(existing_num=""){
    document.getElementById('equation').innerHTML="0 Mod ";
  }else{
    document.getElementById('equation').innerHTML=existing_num+" Mod ";
  }
}
function inverse(){

}
function cleare(){
  document.getElementById('answer').innerHTML="";
  document.getElementById('equation').innerHTML="";
}
function clear(){
  document.getElementById('answer').innerHTML="";
  document.getElementById('equation').innerHTML="";
}
function bksp(){
  existing_num=document.getElementById('answer').innerHTML;
  document.getElementById('answer').innerHTML=existing_num.slice(0,-1);

}
function divide(){

}
function pi(){
  document.getElementById('answer').innerHTML=Math.PI;
}
function multiply(){

}
function factorial(){
  var n=1;
  existing_num=document.getElementById('answer').innerHTML;
  for(x=existing_num;x>0;x--){
    n=n*x;
  }
  document.getElementById('equation').innerHTML="fact("+existing_num+")";
  document.getElementById('answer').innerHTML=n;
}
function minus(){

}
function plus_minus(){

}
function plus(){

}
function equalto(){

}
function nine(){
  existing_num=document.getElementById('answer').innerHTML;
  num =document.getElementById('nine').innerHTML;
  document.getElementById('answer').innerHTML=existing_num+num;
}
function eight(){
  existing_num=document.getElementById('answer').innerHTML;
  num =document.getElementById('eight').innerHTML;
  document.getElementById('answer').innerHTML=existing_num+num;
}
function seven(){
  existing_num=document.getElementById('answer').innerHTML;
  num =document.getElementById('seven').innerHTML;
  document.getElementById('answer').innerHTML=existing_num+num;
}
function six(){
  existing_num=document.getElementById('answer').innerHTML;
  num =document.getElementById('six').innerHTML;
  document.getElementById('answer').innerHTML=existing_num+num;
}
function five(){
  existing_num=document.getElementById('answer').innerHTML;
  num =document.getElementById('five').innerHTML;
  document.getElementById('answer').innerHTML=existing_num+num;
}
function four(){
  existing_num=document.getElementById('answer').innerHTML;
  num =document.getElementById('four').innerHTML;
  document.getElementById('answer').innerHTML=existing_num+num;
}
function three(){
  existing_num=document.getElementById('answer').innerHTML;
  num =document.getElementById('three').innerHTML;
  document.getElementById('answer').innerHTML=existing_num+num;
}
function two(){
  existing_num=document.getElementById('answer').innerHTML;
  num =document.getElementById('two').innerHTML;
  document.getElementById('answer').innerHTML=existing_num+num;
}
function one(){
  existing_num=document.getElementById('answer').innerHTML;
  num =document.getElementById('one').innerHTML;
  document.getElementById('answer').innerHTML=existing_num+num;
}
function zero(){
  existing_num=document.getElementById('answer').innerHTML;
  num =document.getElementById('zero').innerHTML;
  document.getElementById('answer').innerHTML=existing_num+num;
}
function brack1(){
  existing_num=document.getElementById('answer').innerHTML;
  num =document.getElementById('brack1').innerHTML;
  document.getElementById('answer').innerHTML=existing_num+num;
}
function brack2(){
  existing_num=document.getElementById('answer').innerHTML;
  num =document.getElementById('brack2').innerHTML;
  document.getElementById('answer').innerHTML=existing_num+num;
}
function deci() {
  existing_num=document.getElementById('answer').innerHTML;
  num =document.getElementById('decimal').innerHTML;
  document.getElementById('answer').innerHTML=existing_num+num;
}
