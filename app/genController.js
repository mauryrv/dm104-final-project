var userSession = sessionStorage.getItem("userLogged");
userSession = JSON.parse(userSession); 
if(userSession == null){ 
	userSession = [];
}

function endSession()
{
    window.sessionStorage.clear();
    clearCartTable()
    redirectToIndex()

}

function clearCartTable()
{
    window.localStorage.removeItem("tbCarrinho"); // verificar se funciona

}

function redirectToIndex()
{
	window.location.assign("login.html")

}

function verifySession()
{
	var isLogged = false;

	 for(var i in userSession){

			isLogged= true;

        }


	return isLogged;
}

