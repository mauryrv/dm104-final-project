var total=0;
var freight =0;
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

		cols += "<td>"+product.nome+"</td>";
		cols += "<td><input type=\"text\" value=\""+cart.Qty+"\" size=\"1px\" disabled/></td>";
		cols += "<td>"+product.valor+"</td>";
		cols += "<td>"+(cart.Qty*parseInt(product.valor)).toFixed(2)+"</td>";
		//cols += '<td>';
		//cols += '<button onclick="RemoveTableRow(this)" type="button">Remover</button>';
		//cols += '</td>';

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
            document.getElementById("totalValue").innerHTML ="R$ "+total.toFixed(2);

}

function calcFreight()
{
    freight = 10 //peggar com api dos correios

    document.getElementById("freightValue").innerHTML ="R$ "+freight.toFixed(2);
    total = total + freight;
    document.getElementById("totalValue").innerHTML ="R$ "+total.toFixed(2);
 
   
}

function finishOrder()
{
    var tbCarrinho = cartList();
    var userID = getUserLogged();
    
    newOrder(userID,freight,total,tbCarrinho)
} 
