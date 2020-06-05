function pulaLinha() {

    document.write("<br>");
    document.write("<br>");
    }
    
    function mostra(frase){
    document.write(frase);
    pulaLinha();
    }
    
function distribuir(colheita, vizinhos){
        var quantidadeColheita = document.getElementById("total_colheita").value;
        var vizinhos = document.getElementById("vizinhos").value;
        mostra("total laranjas " +  Math.floor(quantidadeColheita/vizinhos));
        mostra("Laranjinhas extras: " + quantidadeColheita % vizinhos);
}

mostra(distribuir());
    
//        var sobra = quantidadeLaranjas % quantidadeRateio;
    
 //       mostra("Fica o total de " + Math.floor(rateio) + " para cada. Restando " + sobra + " a mais para Joselito" );
    
        