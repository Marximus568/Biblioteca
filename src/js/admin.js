export function settingsAdmin() {

    //Estos es para crear elementos al crud
   document.addEventListener("DOMContentLoaded", function() {
    // Delegación de eventos en el documento
    document.addEventListener("click", function(e) {
        // Abrir modal
        if (e.target && e.target.id === "openModal") {
            document.getElementById("modal").classList.remove("hidden");
        }
        
        // Cerrar modal
        if (e.target && (e.target.id === "closeModal" || e.target.id === "cancelModal")) {
            document.getElementById("modal").classList.add("hidden");
        }
        
        // También puedes usar closest() para elementos dentro del botón
        if (e.target.closest("#closeModal") || e.target.closest("#cancelModal")) {
            document.getElementById("modal").classList.add("hidden");
        }
    });

    //Esto es para modificar los elementos ya existente
    document.addEventListener("click", function(e){
        if(e.target && e.target.id === "edit"){
            document.getElementById("modal").classList.remove("hidden")
        }
        if(e.target && e.target.id === "delete"){

        }
    })
});
}
