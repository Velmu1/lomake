var Etunimi = form.Etunimi.value;

if(Etunimi.length<2)
{
  alert("Anna etunimi!");
  form.Etunimi.focus();
  return false;
}
function salasana() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function vastaus()
{
  var x = document.getElementById("myRadio");
  x.checked = true;
}
function check()
{
  var x = document.getElementById("myCheck");
  x.checked = true;
}


var Teksti = form.Teksti.value;

if(Teksti.length<10)
{
  alert("");
  form.Teksti.focus();
  return false;
}
if(Teksti.length>1000)
{
  alert("");
  form.Teksti.focus(),
  return false;
}
