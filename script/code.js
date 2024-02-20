document.getElementById('add-btn').addEventListener('click', function () {
    const day = document.getElementById('day');
    const quantity = document.getElementById('qnt');
    const dayVal = day.value;
    const quantityVal = quantity.value;

    day.value = "";
    quantity.value = "";

    const addList = document.getElementById('add-list');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');

    li1.innerText = quantityVal;
    li2.innerText = dayVal;
    li1.classList.add('quantity-s');
    li2.classList.add('day-s');
    li3.classList.add('cost-s');

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    if (quantityVal === '1') {
        li3.innerText = 80 * parseInt(dayVal);
    }
    else if (quantityVal === '.25') {
        li3.innerText = 20 * parseInt(dayVal);
    }
    else if (quantityVal === '.5') {
        li3.innerText = 40 * parseInt(dayVal);
    }
    else if (quantityVal === '.75') {
        li3.innerText = 60 * parseInt(dayVal);
    }
    else if (quantityVal === '1.25') {
        li3.innerText = 100 * parseInt(dayVal);
    }
    else if (quantityVal === '1.5') {
        li3.innerText = 120 * parseInt(dayVal);
    }
    else if (quantityVal === '1.75') {
        li3.innerText = 140 * parseInt(dayVal);
    }
    else if (quantityVal === '2') {
        li3.innerText = 160 * parseInt(dayVal);
    }
    else if (quantityVal === '0') {
        li3.innerText = 0;
    }
    else {
        return alert('invalid');
    }

    addList.appendChild(ul);


    // -----------------Day Count
    const dayLoop = document.getElementsByClassName('day-s');
    let dayCounted = 0;
    for (const days of dayLoop) {
        const day = parseInt(days.innerText);
        const dayCount = document.getElementById('day-count');
        dayCounted = dayCounted + day;
        dayCount.innerText = dayCounted;
    }
    // ---------------Total Cost Count
    const costLoop = document.getElementsByClassName('cost-s');
    let costCounted = 0;
    for (const costs of costLoop) {
        const cost = parseInt(costs.innerText);
        const costCount = document.getElementById('cost-count');
        costCounted = costCounted + cost;
        costCount.innerText = costCounted;
    }
    // --------------Grand Total
    const grandTotal = document.getElementById('grand-total');
    convertedGrandTotal = parseInt(grandTotal.innerText);
    grandTotal.innerText = costCounted;
})
// ------------Old Remaining
document.getElementById('push-btn').addEventListener('click', function () {
    const oldRemain = document.getElementById('old-remain');
    const convertedOldRemain = parseInt(oldRemain.value);

    const grandTotal = document.getElementById('grand-total');
    const convertedGrandTotal = parseInt(grandTotal.innerText);

    grandTotal.innerText = convertedGrandTotal - convertedOldRemain;
    oldRemain.value = "";
})
// -----------Clear Btn
document.getElementById('clr-btn').addEventListener('click',function(){
    location.reload();
})