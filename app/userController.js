checkSession()

function loginUser(){
//check exist

	if(checkUserLogin()){
		
		window.location.assign("index.html");
	}
	else
		{
			alert("Usuário ou senha inválido!")
		}


}

function add()
{
//check infos are ok
	var result = true;
	result = checkData();

	if(result){
		addCustomer();
		window.location.assign("login.html");
		}
}

function checkData()
{

	var answer = true;
	if($("#txtName").val() =="" || $("#txtCpf").val()==""
	|| $("#txtAddress").val()=="" || $("#txtMail").val()=="" || 
	$("#txtPassword").val()=="" || $("#txtPassword2").val()=="")
	{
		alert("Preencha todos os dados!");
		answer = false;
	}
	else
		{
			if(!checkEmailExist()){
				alert("Email já cadastrado")
				answer = false;

		}else
			if($("#txtPassword").val()!=$("#txtPassword2").val()){

				alert("Senha não confere!")
				answer = false;
			}

		}

	return answer;
}

function checkSession()
{
	if(verifySession()){
		window.location.assign("index.html")
	}


}






