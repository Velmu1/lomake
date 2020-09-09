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
var intVastaus=-1;

for (var i=0; i< form.Vastaus.length;i++)
{
  if (form.Vastaus[i].checked==true)
  {
  intVastaus=i;
  }
}
if(intVastaus==-1)
{
  alert("Et vastannut!"),
  return false;
}
