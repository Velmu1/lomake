function tarkasta(form)
{
<<<<<<< HEAD
  var etunimi = form.enimi.value;
  var salis = form.salasana.value;
  var palaute = form.Tboksi.value;
  var pallukka = form.Vastaus.value;
  var checkbox = form.Mahtava.value;

  if(etunimi.length < 3)
  {
    alert("Anna vähintään 3-merkkinen etunimi");
    form.enimi.focus();
    return false;
=======
var Etunimi = form.Etunimi.value;//etunimi

if(Etunimi.length<2)
{
  alert("Anna etunimi!");
  form.Etunimi.focus();
  return false;
}
}
 {
  var x = document.getElementByName("salasana").value;//salasana
  if (x.type === "password"){
    x.type = "text";
    } else {
    x.type = "password";
>>>>>>> 4dd741ca97445313dcc3ec1cf5fde3f532023cc9
  }
  if(sukunimi.length < 5)
   {
     alert("Anna vähintään 5-merkkinen sukunimi");
     form.snimi.focus();
     return false;
   }
   if(palaute.length < 20)
     {
       alert("Palautteessa pitää olla vähintään 20 merkkiä");
       form.palaute.focus();
       return false;
     }
     var vastaus = false;

  for(var i = 0; i < pallukka.length; i++)
  {
    if(pallukka[i].checked == true)
    {
      vastaus = true;
    }
  }
  if(vastaus == false)
  {
    alert('Et ole valinnut millainen koneen käyttäjä olet');
    return false;
  }

  var checkvastaus = false;
  for(var j = 0; j < check.length; j++)
  {
    if(check[j].checked == true)
    {
      checkvastaus = true;
    }
  }
  if(checkvastaus == false)
  {
    alert("Et valinnut, mitä mieltä olet sivustani");
    return false;
  }
<<<<<<< HEAD
  else {
    alert("Kiitos lomakkeen täytöstä");

  }
}
function tyhjenna(lomake)
{
  var clean = lomake.value;
  if(!confirm("Oletko varma?"))
  {
    return false;
  }
=======
}

var Teksti = form.Teksti.value;//teksti laatikko

if(Teksti.length<10)
{
  alert("");

  return false;
  }
    if(Teksti.length>1000)
  {
  alert("");

  return false;
>>>>>>> 4dd741ca97445313dcc3ec1cf5fde3f532023cc9
}
