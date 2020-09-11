function tarkasta(form)
{
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
}
