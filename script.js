
$(document).ready(function() {
 
   
    $.ajax({
        url: "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72",
        type: "GET"
      
    })
    .done(function( data ) {
        
        console.log( data );
        
        let arr = data.map(item => {

            var $contro = document.querySelector('.row'),
            // Pega a string do conteúdo atual
                HTMLTemporario = $contro.innerHTML,
                // Novo HTML que será inserido
                HTMLNovo = `<div class="card" style="width: 18rem;  margin-bottom: 20px;">
                <img class="card-img-top" src="${item.photo}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${item.property_type}</h5>
                  <p class="card-text">${item.name}</p>
                  <p class="card-text">R$${item.price},00</p>
                  <a href="#" class="btn btn-outline-dark">Reservar</a>
                </div>
              </div>`;
    
            // Concatena as strings colocando o novoHTML antes do HTMLTemporario
            HTMLTemporario = HTMLNovo + HTMLTemporario;
    
            // Coloca a nova string(que é o HTML) no DOM
            $contro.innerHTML = HTMLTemporario;

        })
    
    });



    

});

function handlerSearch() {

    $.ajax({
        url: "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72",
        type: "GET"
      
    })
    .done(function( data ) {
        
        console.log( data );
    
    });

} 

