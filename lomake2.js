function tarkastus(form)
{
var etunimi = form.nimi.value;
var sahkoposti = form.sposti.value;
var pallukka = form.pallo;
var cbox = form.laatikko;
var palaute = form.tboksi.value;
  if(etunimi.length < 2)
  {
    alert("Anna etunimi");
    form.nimi.focus();
    return false;
  }
  var ehto = /\S+@\S+/;
  if(!ehto.test(sahkoposti))
  {
    alert("Anna sähköpostiosoitteesi");
    form.sposti.focus();
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

  }
