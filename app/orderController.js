function listOrders()
{
  var tbPedido = getPedidos();
  var tbPedidoProdutos = getPedidoProduto();
  var userID = getUserLogged();


  for(var i in tbPedido){
      
     
    var pedido = JSON.parse(tbPedido[i]);
     
    
    if(pedido.idCustomer==userID){

        var d = document.createElement('div')
        d.setAttribute("class","page-header")
        var a = document.createElement('a')
        a.setAttribute("href","#")
        a.setAttribute("onclick","toggle('pedido"+i+"')")
        a.innerHTML = "Pedido: "+pedido.id
        d.appendChild(a);
        $("#mainDiv").append(d);

        var d2 = $("<div id=\"pedido"+i+"\" style=\"display:none\">")
        var t = $("<table id =\"newtable"+i+"\" class=\"table\">") 
        var tr = $("<tr>")
        var cols = "";

		cols += "<th>Produto</th>";
		cols += "<th> Quantidade</th>";
		cols += "<th>Valor unitário</th>";
        cols += "<th>Valor total</th>";
       
        tr.append(cols)
        t.append(tr)
        d2.append(t)

        $("#mainDiv").append(d2);


        for(var j in tbPedidoProdutos){
            
            var pedidoProd = JSON.parse(tbPedidoProdutos[j]);
            
            if(pedidoProd.idOrder == pedido.id){

                var product = getProductInfo(pedidoProd.idProduct);
                tr = $("<tr>")
                cols = ""
                cols += "<td>"+product.nome+"</td>";
		        cols += "<td> "+pedidoProd.qty+"</td>";
	            cols += "<td>R$ "+product.valor+"</td>";
                cols += "<td>R$ "+(pedidoProd.qty*parseInt(product.valor)).toFixed(2)+"</td>";
               tr.append(cols)
             

                $("#newtable"+i).append(tr);

            }

        }

            tr = $("<tr>")
            cols = ""
            cols += "<td>-------</td>";
            cols += "<td>-------</td>";
            cols += "<td>-------</td>";
            cols += "<td>-------</td>";
            tr.append(cols)
            $("#newtable"+i).append(tr);

            tr = $("<tr>")
            cols = ""
            cols += "<td><b>Frete</b></td>";
            cols += "<td></td>";
            cols += "<td></td>";
            cols += "<td>R$ "+parseInt(pedido.Freight).toFixed(2)+"</td>";
            tr.append(cols)
            $("#newtable"+i).append(tr);

            tr = $("<tr>")
            cols = ""
            cols += "<td><b>Total</b></td>";
            cols += "<td></td>";
            cols += "<td></td>";
            cols += "<td>R$ "+parseInt(pedido.Total).toFixed(2)+"</td>";
            tr.append(cols)
            $("#newtable"+i).append(tr);

            tr = $("<tr>")
            cols = ""
            cols += "<td>-------</td>";
            cols += "<td>-------</td>";
            cols += "<td>-------</td>";
            cols += "<td>-------</td>";
            tr.append(cols)
            $("#newtable"+i).append(tr);


            tr = $("<tr>")
            cols = ""
            cols += "<td><b>Status</b></td>";
            cols += "<td></td>";
            cols += "<td></td>";
            cols += "<td>"+pedido.Status+"</td>";
            tr.append(cols)
            $("#newtable"+i).append(tr);


            var hr =  $("<hr style=\"height:5px\"/>")
            
             d2.append(hr)

      

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