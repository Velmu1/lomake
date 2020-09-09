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

{
  var x = document.getElementByName("vastaus");
  x.checked = true;
}

{
  var x = document.getElementByName("check");
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
