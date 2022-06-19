const bestPriceText = document.getElementById("best-price");
const bestPrice = parseFloat(bestPriceText.innerText);
const memoryCost = document.getElementById("memory-cost");
const storageCost = document.getElementById("storage-cost");
const deliveryCost = document.getElementById("delivery-cost");
const totalPrice = document.getElementById("total-price");
const totalAmount = document.getElementById("total-amount");
// Memory
document.getElementById("memory-8GB").addEventListener("click", function () {
  extraMemory(0);
});
document.getElementById("memory-16GB").addEventListener("click", function () {
  extraMemory(180);
});
// Extra Memory Cost
function extraMemory(memoryPrice) {
  memoryCost.innerText = memoryPrice;
  totalPrice.innerText = bestPrice + parseFloat(storageCost.innerText) + memoryPrice + parseFloat(deliveryCost.innerText);
  totalAmount.innerText = bestPrice + parseFloat(storageCost.innerText) + memoryPrice + parseFloat(deliveryCost.innerText);
}
// Extra Storage
document.getElementById("SSD-256GB").addEventListener("click", function () {
  extraStorage(0);
});
document.getElementById("SSD-512GB").addEventListener("click", function () {
  extraStorage(100);
});
document.getElementById("SSD-1TB").addEventListener("click", function () {
  extraStorage(180);
});
//Extra Storage Cost
function extraStorage(storagePrice) {
  storageCost.innerText = storagePrice;
  totalPrice.innerText = bestPrice + parseFloat(memoryCost.innerText) + storagePrice + parseFloat(deliveryCost.innerText);
  totalAmount.innerText = bestPrice + parseFloat(memoryCost.innerText) + storagePrice + parseFloat(deliveryCost.innerText);
}
// Delivery Charge
document.getElementById("delivery-free").addEventListener("click", function () {
  deliveryCharge(0);
});
document
  .getElementById("delivery-charge")
  .addEventListener("click", function () {
    deliveryCharge(20)
  });
// Delivery Cost
function deliveryCharge(charge){
    deliveryCost.innerText = charge
    totalPrice.innerText = bestPrice + parseFloat(memoryCost.innerText) + charge + parseFloat(storageCost.innerText);
    totalAmount.innerText = bestPrice + parseFloat(memoryCost.innerText) + charge + parseFloat(storageCost.innerText);
}
// Promo Code
document.getElementById('apply-code').addEventListener('click', function(){
    codeMatcher();
})
function codeMatcher(){
    const total = parseFloat(totalPrice.innerText); 
    const promo = document.getElementById('promo-code')
    if(promo.value == 'promo'){
        totalAmount.innerText = total - (total*.2)
    }
    promo.value = ''
}