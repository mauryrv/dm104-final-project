var tbCarrinho = localStorage.getItem("tbCarrinho");
tbCarrinho = JSON.parse(tbCarrinho);
if(tbCarrinho == null){ 
	tbCarrinho = [];
}

function addCartItem(id)
{
    var cart = JSON.stringify({
	 	idProduct  : id,
		Qty : 	1

	});
	tbCarrinho.push(cart);
	localStorage.setItem("tbCarrinho", JSON.stringify(tbCarrinho));
	return true;

}

function checkItemInCart(id){

var isAdded = false;
for(var i in tbCarrinho){
	
		var cart = JSON.parse(tbCarrinho[i]);

		if(cart.idProduct==id)
		{
            isAdded = true;
		}
		
    }
    
    return isAdded;

}

function cartList()
{
	return tbCarrinho;

}

function editCart(id,index,qty){

	tbCarrinho[index] = JSON.stringify({
		idProduct  : id,
		Qty : 	qty

	});
	 
	localStorage.setItem("tbCarrinho", JSON.stringify(tbCarrinho));
	
	return true;
}

function deleteItem(index){
	tbCarrinho.splice(index, 1);
	localStorage.setItem("tbCarrinho", JSON.stringify(tbCarrinho));
	
}





