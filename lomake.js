function lomake()
{
var Etunimi = form.Etunimi.value;

if(Etunimi.length<2)
{
  alert("Anna etunimi!");
  form.Etunimi.focus();
  return false;
}
}
 {
  var x = document.getElementByName("salasana").value;
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
    alert("Et vastannut!");
    return false;
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
