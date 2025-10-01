// El hadji Silly Diene et Seydiane Mouhamed Sylla 
var login_username="Admin";
var login_password="12345";

var logine_username="Senegal";//ajout admin personnel
var logine_password="2024";//ajout mot de passe personnel

function f1() {
	$(document).ready(function () {
		$(".login").show();
		$(".logout").hide();
	});

}

function authenticate_login()
{
  var v1, v2, v3 ,v4;
  //v1 = document.getElementById("user").value;
  v1 = document.form1.firstname.value;
  v2 = document.getElementById("pwd").value;
  v3 = document.form1.firstname.value;
  v4 = document.getElementById("pwd").value;

	if ((v1 == login_username) &&
	   (v2 ==  login_password)||(v3==logine_username)&&(v4==logine_password))
	{
	  alert('Bienvenue a mon site web');
	  parent.frames.Menu_Frame.location.href  ="Menu.htm";
	  $(document).ready(function() {
		$(".login").hide();
		$(".logout").show();
	});
	}
	else
	{
	  alert('Nom utilisateur ou Mot de passe invalide\nUtiliser admin et 12345 ou Senegal et 2024 comme mot de passe');
	  document.getElementById("pwd").value="";
	  document.getElementById("pwd").focus();
	  parent.frames.Menu_Frame.location.href ="MenuT.htm";
	  $(document).ready(function () {
		$(".login").show();
		$(".logout").hide();
	});
	  
	}
}


function authenticate_logout()
{
  alert('Merci!');
  document.getElementById("user").value="";
  document.getElementById("pwd").value="";
  document.getElementById("user").focus();
  parent.frames.Menu_Frame.location.href ="MenuT.htm";
  parent.frames.Content_Frame.location.href ="Content.htm";
  $(document).ready(function () {
	$(".login").show();
	$(".logout").hide();
});
}





