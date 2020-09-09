var Etunimi = form.Etunimi.value;

if(Etunimi.length<2)
{
  alert("Anna etunimi!");
  form.Etunimi.focus();
  return false;
}
var Sukunimi = form.Sukunimi.value;

if(Sukunimi.length<2)
{
  alert("Anna sukunimi!");
  form.Sukunimi.focus();
  return false;
}
