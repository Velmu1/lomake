var Etunimi = form.Etunimi.value;

if(Etunimi.length<2)
{
  alert("Anna etunimi");
  form.Etunimi.focus();
  return false;
}
