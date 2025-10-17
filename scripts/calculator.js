let prices = {vanilla:2500,chocolate:2800,redvelvet:3000,blackforest:2700};

function calculatePrice(){
    const type = document.getElementById('cakeType').value;
    const size = parseFloat(document.getElementById('size').value);
    const delivery = document.getElementById('delivery').value;
    const distance = parseFloat(document.getElementById('distance').value || 0);
    
    document.getElementById('distanceGroup').style.display = delivery === 'yes' ? 'block' : 'none';
    
    if(!type || !size) return;
    
    let total = prices[type] * size;
    let deliveryFee = 0;
    
    if(delivery === 'yes'){
        deliveryFee = distance * 100;
        total += deliveryFee;
    }
    
    const result = document.getElementById('priceResult');
    result.innerHTML = '<strong>TOTAL: KSh ' + total.toLocaleString() + '</strong><br>Cake: KSh ' + (prices[type] * size).toLocaleString() + '<br>' + (delivery === 'yes' ? 'Delivery (' + distance + 'km): KSh ' + deliveryFee.toLocaleString() : 'Pickup: FREE');
    
    const whatsappBtn = document.getElementById('whatsappBtn');
    let cakeName = type;
    if(type === 'redvelvet') cakeName = 'Red Velvet';
    if(type === 'blackforest') cakeName = 'Black Forest';
    const message = 'Hi! ' + size + 'kg ' + cakeName + ' cake. Total: KSh ' + total.toLocaleString() + '.';
    whatsappBtn.href = 'https://wa.me/254712345678?text=' + encodeURIComponent(message); // CHANGE NUMBER!
}
