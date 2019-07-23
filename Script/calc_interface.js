var num;
var existing_num;
var x;
<<<<<<< HEAD
<<<<<<< HEAD
var existing_equation;
=======
>>>>>>> master
=======
>>>>>>> 7ba8cd1d99e84db277a67effec849a8a426672da
function sqr(){
  existing_num=document.getElementById('answer').innerHTML;
  var square=existing_num*existing_num;
  document.getElementById('equation').innerHTML="sqr("+existing_num+")";
  document.getElementById('answer').innerHTML=square;
}
function power(){
  existing_num=document.getElementById('answer').innerHTML;
<<<<<<< HEAD
<<<<<<< HEAD
  document.getElementById('equation').innerHTML=existing_num+"^";
  document.getElementById('answer').innerHTML="";
=======
  var square=existing_num*existing_num;
  document.getElementById('equation').innerHTML="sqr("+existing_num+")";
  document.getElementById('answer').innerHTML=square;
>>>>>>> master
=======
  var square=existing_num*existing_num;
  document.getElementById('equation').innerHTML="sqr("+existing_num+")";
  document.getElementById('answer').innerHTML=square;
>>>>>>> 7ba8cd1d99e84db277a67effec849a8a426672da
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
<<<<<<< HEAD
<<<<<<< HEAD
  existing_num=document.getElementById('answer').innerHTML;
  if(existing_num=""){
    document.getElementById('answer').innerHTML="0.e+";
  }else{
    document.getElementById('answer').innerHTML=existing_num+".e+";
  }
=======

>>>>>>> master
=======

>>>>>>> 7ba8cd1d99e84db277a67effec849a8a426672da
}
function mod(){
  existing_num=document.getElementById('answer').innerHTML;
  if(existing_num=""){
<<<<<<< HEAD
<<<<<<< HEAD
    document.getElementById('equation').innerHTML="0Mod";
  }else{
    document.getElementById('equation').innerHTML=existing_num+"Mod";
=======
    document.getElementById('equation').innerHTML="0 Mod ";
  }else{
    document.getElementById('equation').innerHTML=existing_num+" Mod ";
>>>>>>> master
=======
    document.getElementById('equation').innerHTML="0 Mod ";
  }else{
    document.getElementById('equation').innerHTML=existing_num+" Mod ";
>>>>>>> 7ba8cd1d99e84db277a67effec849a8a426672da
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
<<<<<<< HEAD
<<<<<<< HEAD
}
function divide(){
  existing_num=document.getElementById('answer').innerHTML;
  existing_equation=document.getElementById('equation').innerHTML;
  num =document.getElementById('divide').innerHTML;
  if(existing_num=""){
    document.getElementById('equation').innerHTML="0"+num;
  }else{
    document.getElementById('equation').innerHTML=existing_equation+document.getElementById('answer').innerHTML+num;
  }
  document.getElementById('answer').innerHTML="";
=======
=======
>>>>>>> 7ba8cd1d99e84db277a67effec849a8a426672da

}
function divide(){

<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> 7ba8cd1d99e84db277a67effec849a8a426672da
}
function pi(){
  document.getElementById('answer').innerHTML=Math.PI;
}
function multiply(){
<<<<<<< HEAD
<<<<<<< HEAD
  existing_num=document.getElementById('answer').innerHTML;
  existing_equation=document.getElementById('equation').innerHTML;
  num =document.getElementById('multiply').innerHTML;
  if(existing_num=""){
    document.getElementById('equation').innerHTML="0"+num;
  }else{
    document.getElementById('equation').innerHTML=existing_equation+document.getElementById('answer').innerHTML+num;
  }
  document.getElementById('answer').innerHTML="";
=======

>>>>>>> master
=======

>>>>>>> 7ba8cd1d99e84db277a67effec849a8a426672da
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
<<<<<<< HEAD
<<<<<<< HEAD
  existing_num=document.getElementById('answer').innerHTML;
  existing_equation=document.getElementById('equation').innerHTML;
  num =document.getElementById('minus').innerHTML;
  if(existing_num=""){
    document.getElementById('equation').innerHTML="0"+num;
  }else{
    document.getElementById('equation').innerHTML=existing_equation+document.getElementById('answer').innerHTML+num;
  }
  document.getElementById('answer').innerHTML="";
}
function plus_minus(){
  existing_num=document.getElementById('answer').innerHTML;
  if(existing_num=""){
    document.getElementById('equation').innerHTML="0";
  }else{
    x=-1;
    document.getElementById('answer').innerHTML=document.getElementById('answer').innerHTML*x;
  }
}
function plus(){
  existing_num=document.getElementById('answer').innerHTML;
  existing_equation=document.getElementById('equation').innerHTML;
  if(existing_num=""){
    document.getElementById('equation').innerHTML="0+";
  }else{
    document.getElementById('equation').innerHTML=existing_equation+document.getElementById('answer').innerHTML+"+";
  }
  document.getElementById('answer').innerHTML="";
=======
=======
>>>>>>> 7ba8cd1d99e84db277a67effec849a8a426672da

}
function plus_minus(){

}
function plus(){

<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> 7ba8cd1d99e84db277a67effec849a8a426672da
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
