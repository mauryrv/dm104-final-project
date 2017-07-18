var tbProduto = localStorage.getItem("tbProdutos");
tbProduto = JSON.parse(tbProduto); 
if(tbProduto == null){ 
	tbProduto = [];
}

function createData(){

const products = [
{   "id":"1",
    "nome":"tenis 1",
    "valor":"34,00"
},
{   "id":"2",
    "nome":"tenis 1",
    "valor":"34,00"
},
{   "id":"3",
    "nome":"tenis 1",
    "valor":"34,00"
},
{   "id":"4",
    "nome":"tenis 1",
    "valor":"34,00"
},
{   "id":"5",
    "nome":"tenis 1",
    "valor":"34,00"
},
{   "id":"6",
    "nome":"tenis 1",
    "valor":"34,00"
},
{   "id":"7",
    "nome":"tenis 1",
    "valor":"34,00"
},
{   "id":"8",
    "nome":"tenis 1",
    "valor":"34,00"
},
{   "id":"9",
    "nome":"tenis 1",
    "valor":"34,00"
}

]

for(let i=0;i<products.length;i++){

    tbProduto.push(products[i]);
	localStorage.setItem("tbProdutos", JSON.stringify(tbProduto));
     //console.log(products)
 }

}
function checkDataAdded(){
    var hasData = false;

	 for(var i in tbProduto){

			hasData= true;
        }
	return hasData;
}