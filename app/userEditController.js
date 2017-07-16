var id = getUserLogged() //pesquisar função de salvar sessão para guardar usuáro logado
onLoadUserEdit()

function edit(){
    if(checkData()){
        editCustomer(id)
    }

}

function checkData(){

	var answer = true;
	if($("#txtName").val() =="" || $("#txtCpf").val()==""
	|| $("#txtAddress").val()=="" || $("#txtMail").val()=="" || 
	$("#txtPassword").val()=="")
	{
		alert("Preencha todos os dados!");
		answer = false;
	}
	else
		{
			if($("#txtPassword").val()!=$("#txtPassword2").val()){

				alert("Senha não confere!")
				answer = false;
			}

		}

		

	return answer;
}

function onLoadUserEdit()
{
    
    getUser(id);


}