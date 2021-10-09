let counta=0;

function count() {
  counta++;
  document.getElementById("val").innerHTML=counta;
}

window.onload=function(){
  document.getElementById("count").onclick=function () {
    count();
  }

}