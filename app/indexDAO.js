var tbProduto = localStorage.getItem("tbProdutos");
tbProduto = JSON.parse(tbProduto); 
if(tbProduto == null){ 
	tbProduto = [];
}

function createData(){

const products = [
{   "id":"1",
    "nome":"Tênis Asics Masculino",
    "valor":"459,90",
    "image":"Images/tenis_asics.jpg"
},
{   "id":"2",
    "nome":"Tênis Nike Masculino",
    "valor":"229,90",
    "image":"Images/tenis_nike.jpg"
},
{   "id":"3",
    "nome":"Tênis Adidas Masculino",
    "valor":"199,90",
    "image":"Images/tenis_adidas.jpg"
},
{   "id":"4",
    "nome":"Tênis Adidas Masculino",
    "valor":"99,90",
    "image":"Images/tenis_adidas2.jpg"
},
{   "id":"5",
    "nome":"Tênis Nike Masculino",
    "valor":"99,90",
    "image":"Images/tenis_nike2.jpg"
},
{   "id":"6",
    "nome":"Tênis Adidas Feminino",
    "valor":"99,90",
    "image":"Images/tenis_adidas3.jpg"
},
{   "id":"7",
    "nome":"Tênis Asics Masculino",
    "valor":"99,90",
    "image":"Images/tenis_asics2.jpg"
},
{   "id":"8",
    "nome":"Tênis Nike Feminino",
    "valor":"199,90",
    "image":"Images/tenis_nike3.jpg"
},
{   "id":"9",
    "nome":"Tênis Asics Feminino",
    "valor":"149,90",
    "image":"Images/tenis_asics3.jpg"
},
{   "id":"10",
    "nome":"Tênis Adidas Masculino",
    "valor":"125,00",
    "image":"Images/tenis_adidas4.jpg"
}
,
{   "id":"11",
    "nome":"Tênis Nike Masculino",
    "valor":"149,00",
    "image":"Images/tenis_nike4.jpg"
},
{   "id":"12",
    "nome":"Tênis Asics Feminino",
    "valor":"89,00",
    "image":"Images/tenis_asics4.jpg"
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

function getProductInfo(id)
{
    var retunProduto = null;

    for(var i in tbProduto){
       
        var produto = tbProduto[i];
 
            
        if(produto.id == id){
            retunProduto = tbProduto[i];
        }


        }
return retunProduto;

	
}