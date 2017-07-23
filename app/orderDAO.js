var tbPedidos = localStorage.getItem("tbPedidos");// Recupera os dados armazenados
tbPedidos = JSON.parse(tbPedidos); // Converte string para objeto
if(tbPedidos == null){ // Caso não haja conteúdo, iniciamos um vetor vazio
	tbPedidos = [];
}

var tbPedidoProduto = localStorage.getItem("tbPedidoProduto");// Recupera os dados armazenados
tbPedidoProduto = JSON.parse(tbPedidoProduto); // Converte string para objeto
if(tbPedidoProduto == null){ // Caso não haja conteúdo, iniciamos um vetor vazio
	tbPedidoProduto = [];
}

function newOrder(customer,freight,total,cartProducts){
    var ordeId = addNewOrder(customer,freight,total);

    if(ordeId!=0){
        addNewOrderProduct(ordeId,cartProducts);
    }

}
function addNewOrder(customer,freight,total)
{
    var newOrderId = getNewOrderId();
    var pedido = JSON.stringify({
	 	id   : newOrderId.toString(),
		idCustomer : 	customer.toString(),
		Freight  : freight.toString(),
		Total: total.toString()
		
	});
    tbPedidos.push(pedido);
    console.log(pedido);
	localStorage.setItem("tbPedidos", JSON.stringify(tbPedidos));
	return newOrderId;


}

function addNewOrderProduct(ordeId,cartProducts)
{


    for(var i in cartProducts){

        var cart = JSON.parse(cartProducts[i]);
        var pedidoProduto = JSON.stringify({
            idOrder   : ordeId,
            idProduct : cart.idProduct,
            qty  : cart.Qty
            
        });
        tbPedidoProduto.push(pedidoProduto);
        localStorage.setItem("tbPedidoProduto", JSON.stringify(tbPedidoProduto));

        }
    
    

    clearCartTable();
    alert("Compra realizada com sucesso!");
    Response.redirect("index.html")
	


}





function getNewOrderId(){
	var newid = 1;

		for(var i in tbPedidos){
				newid = newid+1
        }
		
	return newid;

}