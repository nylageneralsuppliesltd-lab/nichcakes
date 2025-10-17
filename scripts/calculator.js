let prices = {
    vanilla: 2500,
    chocolate: 2800,
    redvelvet: 3000,
    blackforest: 2700
};

function calculatePrice() {
    const type = document.getElementById('cakeType').value;
    const size = parseFloat(document.getElementById('size').value);
    const delivery = document.getElementById('delivery').value;
    const distance = parseFloat(document.getElementById('distance')?.value || 0);
    
    // Show distance input if delivery
    document.getElementById('distanceGroup').style.display = delivery === 'yes' ? 'block' : 'none';
    
    if (!type || !size) return;
    
    let total = prices[type] * size;
    let deliveryFee = 0;
    
    if (delivery === 'yes') {
        deliveryFee = distance * 100; // KSh 100/km
        total += deliveryFee;
    }
    
    const result = document.getElementById('priceResult');
    result.innerHTML = `
        <strong>YOUR TOTAL: KSh ${total.toLocaleString()}</strong><br>
        Cake: KSh ${(prices[type] * size).toLocaleString()}<br>
        ${delivery === 'yes' ? `Delivery (${distance}km): KSh ${deliveryFee.toLocaleString()}` : 'Pickup: FREE'}
    `;
    
    // WhatsApp button
    const whatsappBtn = document.getElementById('whatsappBtn');
    const message = `Hi! I want a ${size}kg ${type.replace(/([A-Z])/g, ' $1').trim()} cake. Total: KSh ${total.toLocaleString()}.`;
    whatsappBtn.href = `https://wa.me/2547XXXXXXXX?text=${encodeURIComponent(message)}`;
}
