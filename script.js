function selectFood(item, price, qtyId, choiceId) {
    let qty = document.getElementById(qtyId).value;
    let choice = document.getElementById(choiceId).value;

    window.location.href =
        `select.html?item=${encodeURIComponent(item)}&price=${price}&qty=${qty}&choice=${encodeURIComponent(choice)}`;
}
