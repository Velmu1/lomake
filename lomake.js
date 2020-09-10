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
var pallukat = document.getElementByName('vastaukset');//radio
var vastaus = 0;
for (var 1 = 0; i < pallukat.length; i++)
  {
    if (pallukat[i].checked == 1)
    {
      vastaus = 1;
    }
  }
  if (vastaus == 0)
  {
    alert("")
  }

{
  var laatikko = document.getElementByName('laatikko');//checkbox
  var vastaus = 0;
  for (var 1 = 0; i < laatikko.length; i++)
    {
      if (laatikko[i].checked == 1)
      {
        vastaus = 1;
      }
    }
    if (vastaus == 0)
    {
      alert("")
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
