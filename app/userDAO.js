var tbClientes = localStorage.getItem("tbClientes");// Recupera os dados armazenados
tbClientes = JSON.parse(tbClientes); // Converte string para objeto
if(tbClientes == null){ // Caso não haja conteúdo, iniciamos um vetor vazio
	tbClientes = [];
}

//keep the session for the user logged
var userSession = sessionStorage.getItem("userLogged");
userSession = JSON.parse(userSession); 
if(userSession == null){ 
	userSession = [];
}

function addCustomer(){
	var cliente = JSON.stringify({
	 	id   : getNewId(),
		Name : 	$("#txtName").val(),
		Cpf  : $("#txtCpf").val(),
		Email: $("#txtMail").val(),
		Address:$("#txtAddress").val(),
		Cep: $("#txtCep").val(),
		Password:$("#txtPassword").val()
		
		
	});
	tbClientes.push(cliente);
	localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
    alert("Usuário cadastrado");
    Response.redirect("login.html")
	return true;
}

function editCustomer(userId){

	tbClientes[userId-1] = JSON.stringify({
	 	id : 	userId,
		Name : 	$("#txtName").val(),
		Cpf  : $("#txtCpf").val(),
		Email: $("#txtMail").val(),
		Cep: $("#txtCep").val(),
		Address:$("#txtAddress").val(),
		Password:$("#txtPassword").val()
		
		
	});
	 
	localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
	alert("Informações editadas.")
	return true;
}

function checkUserLogin(){
	var result = false;

	for(var i in tbClientes){
	
		var cli = JSON.parse(tbClientes[i]);

		if(cli.Email==$("#login-username").val() && cli.Password == $("#login-password").val())
			{
				result = true;
				var session = JSON.stringify({
				id   : cli.id		
				});
			userSession.push(session);
			sessionStorage.setItem("userLogged", JSON.stringify(userSession));
			}
		
	}
	return result;
}

function getNewId(){
	var newid = 1;

		for(var i in tbClientes){
				newid = newid+1
        }
		
	return newid;

}

function checkEmailExist(){
	var result = true;
    if(tbClientes == null){
        result = false;
    }
    else{

        for(var i in tbClientes){
				var cli = JSON.parse(tbClientes[i]);
				if(cli.Email == $("#txtMail").val())
					result= true;

        }

	}

	return result;
}

function getUser(id){

	for(var i in tbClientes){
	
		var cli = JSON.parse(tbClientes[i]);

		if(cli.id==id)
		{

			$("#txtName").val(cli.Name)
			$("#txtCpf").val(cli.Cpf) 
			$("#txtMail").val(cli.Email)
			$("#txtCep").val(cli.Cep)
			$("#txtAddress").val(cli.Address)
			$("#txtPassword").val(cli.Password)
			$("#txtPassword2").val(cli.Password)
		}	
	}
}

function getUserName(id){

	for(var i in tbClientes){
	
		var cli = JSON.parse(tbClientes[i]);

		if(cli.id==id)
		{
			return cli.Name;			
		}	
	}
}

function verifySession()
{
	var isLogged = false;

	 for(var i in userSession){

			isLogged= true;
        }


	return isLogged;
}

function getUserLogged()
{
	var session = JSON.parse(userSession[0]);
	return session.id;

}

function EndSession()
{
	window.sessionStorage.clear();
	//add clear on cart itens

}