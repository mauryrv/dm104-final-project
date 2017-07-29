var total=0;
var freight =10;
function buy(id)
{
    if(!checkItemInCart(id))
        addCartItem(id);

}


function OnLoadCart()
{
    list()
    calcTotal()

}

function list()
{
    var tbCarrinho = cartList();
    for(var i in tbCarrinho){
	
		var cart = JSON.parse(tbCarrinho[i]);
        //montar table de pedidos
		var product = getProductInfo(cart.idProduct);
		var newRow = $("<tr>");
    	var cols = "";
		cols += "<td><input type=\"image\" src=\""+product.image+"\" width=\"50px\"> "+product.nome+"</td>";
		cols += "<td> <link class=\"glyphicon glyphicon-minus\" onclick=\"subtractItemQty("+cart.idProduct+","+i+","+cart.Qty+")\"/><input type=\"text\" value=\""+cart.Qty+"\" size=\"1px\" disabled/><link class=\"glyphicon glyphicon-plus\" onclick=\"addItemQty("+cart.idProduct+","+i+","+cart.Qty+")\"/></td>";
		cols += "<td>"+product.valor+"</td>";
        cols += "<td>"+(cart.Qty*parseInt(product.valor)).toFixed(2)+"</td>";
        cols +="<td><link class=\"glyphicon glyphicon-trash\" onclick=\"deleteCartIItem("+i+")\"/></td>";

		newRow.append(cols);
		$("#tbCartItens").append(newRow);

    }
}

function calcTotal()
{
        var tbCarrinho = cartList();
        total =  0;
        for(var i in tbCarrinho){
            
                var cart = JSON.parse(tbCarrinho[i]);
                var product = getProductInfo(cart.idProduct);
                total=total + (cart.Qty*parseInt(product.valor));
               

        }
            total=total+10;
            document.getElementById("totalValue").innerHTML ="R$ "+total.toFixed(2);

}



function finishOrder()
{
    var tbCarrinho = cartList();
    var userID = getUserLogged();
    
    newOrder(userID,freight,total,tbCarrinho)
    
} 

function subtractItemQty(id,index,qty){

var newQty = qty-1;
if(newQty <=0){
 
    deleteItem(index)
}
else
    {
        editCart(id,index,newQty)
    }

    window.location.assign("cart.html")

}

function addItemQty(id,index,qty){

var newQty = qty+1
console.log("qty" + newQty)
editCart(id,index,newQty)

window.location.assign("cart.html")

}

function deleteCartIItem(index)
{
deleteItem(index)
window.location.assign("cart.html")

}
