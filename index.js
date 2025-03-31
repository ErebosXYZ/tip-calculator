// ¡Buena suerte!
// Crear variables per a cada id

let billInput = document.querySelector("#bill");
let tipInput = document.querySelector("#tip");
let calculateBtn = document.querySelector("#calculate");

// Hem de crear una funció que utilitzi la propietat value de bill i li sumi la propina quan apretem el botó
// El valor de la propina s'ha d'aplicar al billValue en forma de percentatge
// Calculem el totalValue multiplicant el billValue per 1 + tipValue entre 100, així billValue es multiplica per 1.(tipValue/100) i el resultat serà el valor de billValue més el percentatge de propina.
// També fem que el contingut del span total sigui el valor resultant de la funció


function calculateTotal() {
    let billValue = billInput.value;
    let tipValue = tipInput.value;
    console.log(billValue, tipValue);
    let totalValue = billValue * (1 + tipValue / 100);
    console.log(totalValue);
    document.querySelector("#total").textContent = totalValue;
}

// Afegim l'event click a calculate

calculateBtn.addEventListener("click", calculateTotal);