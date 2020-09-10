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
var intPallukka=-1;//radio

for (var i=0; i < form.Pallukka.length;i++)
  {
    if (form.Pallukka[i].checked==true)
  {
    intPallukka=i;
  }
}
var intLaatikko=-1;//checkbox

for (var i=0; i < form.Laatikko.length;i++)
  {
    if (form.Laatikko[i].checked==true)
  {
    intLaatikko=i;
  }
}

var Teksti = form.Teksti.value;

if(Teksti.length<10)
{
  alert("");

  return false;
}
if(Teksti.length>1000)
{
  alert("");

  return false;
}
