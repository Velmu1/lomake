function tarkasta(form)
{
  var etunimi = form.enimi.value;
  var salis = form.salasana.value;
  var pallukka = form.pallo;
  var checkbox = form.mahtava;
  var palaute = form.Tboksi.value;
  if(etunimi.length < 3)
  {
    alert("Anna vähintään 3-merkkinen etunimi");
    form.enimi.focus();
    return false;
  }
  if(salis.length < 5)
   {
     alert("Anna vähintään 5-merkkinen sukunimi");
     form.salasana.focus();
     return false;
   }
   if(palaute.length < 20)
     {
       alert("Palautteessa pitää olla vähintään 20 merkkiä");
       form.Tboksi.focus();
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

  var mahtava = false;
  for(var j = 0; j < checkbox.length; j++)
  {
    if(checkbox[j].checked == true)
    {
      mahtava = true;
    }
  }
  if(mahtava == false)
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
