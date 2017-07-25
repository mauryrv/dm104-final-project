function listOrders()
{
  var tbPedido = getPedidos();
  var tbPedidoProdutos = getPedidoProduto();
var userID = getUserLogged();

for(var i in tbPedido){
    var pedido = JSON.parse(tbPedido[i]);

    if(pedido.idCustomer == userID){
        var newTable = $("<table>");
    var newTh = $("<tr>");
    var colsTh = "";
    colsTh += "<th>Produto</th>";
    colsTh += "<th>Quantidade</th>";
    colsTh += "<th>Valor Unitário</th>";
    colsTh += "<th>ValorTotal</th>";
     newTh.append(colsTh);
     newTable.append(newTh);
        var pedidoID = pedido.id
        for(var f in tbPedidoProdutos){


            var pedidoProduto = JSON.parse(tbPedidoProdutos[f]);
            if(pedidoProduto.idOrder==pedidoID)
                {
                    var product = getProductInfo(pedidoProduto.idProduct);
                    var newRow = $("<tr>");
                    var cols = "";

                    cols += "<td>"+product.nome+"</td>";
                    cols += "<td> "+pedidoProduto.Qty+"</td>";
                    cols += "<td>"+product.valor+"</td>";
                    cols += "<td>"+(pedidoProduto.Qty*parseInt(product.valor)).toFixed(2)+"</td>";                  
                    newRow.append(cols);
                    newTable.append(newTh);
                    

                }

        }
            
        var newTdTotal = $("<tr>");
        var colsTotal = "";
        colsTotal += "<td><b>Total</b></td>";
        colsTotal += "<td></td>";
        colsTotal += "<td></td>";
        colsTotal += "<td>"+(pedido.Total + pedido.freight)+"</td>";
        newTdTotal.append(colsTh);
        newTable.append(newTdTotal);
        $("#mainDiv").append(newTable);




    }

}


    
}

function toggle(obj) {
    var el = document.getElementById(obj);
    
    if ( el.style.display != 'none' ) {
        el.style.display = 'none';
    } 
    else 
    {
        el.style.display = '';
    }
}