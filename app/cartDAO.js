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

		if(cart.id==id)
		{
            isAdded = true;
		}
		
    }
    
    return isAdded;

}

function cartList()
{

    


}