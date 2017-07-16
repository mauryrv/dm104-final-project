function endSession()
{
    window.sessionStorage.clear();
    redirectToIndex()
	//add clear on cart itens

}

function redirectToIndex()
{
	window.location.assign("login.html")

}

