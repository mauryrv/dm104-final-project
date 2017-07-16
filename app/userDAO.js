var tbClientes = localStorage.getItem("tbClientes");// Recupera os dados armazenados
tbClientes = JSON.parse(tbClientes); // Converte string para objeto
if(tbClientes == null){ // Caso não haja conteúdo, iniciamos um vetor vazio
	tbClientes = [];
}

function addCustomer(){
	var cliente = JSON.stringify({
	 	id   : getNewId(),
		Name : 	$("#txtName").val(),
		Cpf  : $("#txtCpf").val(),
		Email: $("#txtMail").val(),
		Address:$("#txtAddress").val(),
		Password:$("#txtPassword").val()
		
		
	});
	tbClientes.push(cliente);
	localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
    alert("Usuário cadastrado");
    Response.redirect("logon.html")
	return true;
}

function editCustomer(userId){

	tbClientes[userId-1] = JSON.stringify({
	 	
		Name : 	$("#txtName").val(),
		Cpf  : $("#txtCpf").val(),
		Email: $("#txtMail").val(),
		Address:$("#txtAddress").val(),
		Password:$("#txtPassword").val()
		
		
	});
	 
	localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
	alert("Informações editadas.")
	operacao = "A"; //Volta ao padrão
	return true;
}

function checkUserLogin(){
	var result = false;

	for(var i in tbClientes){
	
		var cli = JSON.parse(tbClientes[i]);

		if(cli.Email==$("#login-username").val() && cli.Password == $("#login-password").val())
			{
				result = true;
	//set session user equal user that is loggged
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
			$("#txtAddress").val(cli.Address)
			$("#txtPassword").val(cli.Password)
			$("#txtPassword2").val(cli.Password)
		}
		
	}


}