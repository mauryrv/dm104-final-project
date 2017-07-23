var userSession = sessionStorage.getItem("userLogged");
userSession = JSON.parse(userSession); 
if(userSession == null){ 
	userSession = [];
}

function endSession()
{
    window.sessionStorage.clear();
    clearCartTable()
    redirectToLogin()

}

function clearCartTable()
{
    window.localStorage.removeItem("tbCarrinho"); 

}

function redirectToLogin()
{
	window.location.assign("login.html")

}

function verifySession()
{
	var isLogged = false;

	 for(var i in userSession){

	
			isLogged= true;
		

        }

		if(!isLogged)
			redirectToLogin()

	return isLogged;
}

function showUser(){

	var id = getUserLogged();
	var nameUser = getUserName(id);

	var divUser = document.getElementById('perfilTitle')
	divUser.innerHTML = nameUser;

}
