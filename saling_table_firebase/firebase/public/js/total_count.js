let total = 0;

function updateTotal() {
    console.log("updateTotal triggered")

    if (document.getElementById('option1').checked) {
        total += 10;
    }
    else if  (document.getElementById('option2').checked) {
        total += 20;
    }
    else if  (document.getElementById('option3').checked) {
        total += 30;
    }
    else if  (document.getElementById('option4').checked) {
        total += 40;
    }
    // 다른 옵션들에 대한 가격 계산 추가

    document.getElementById('totalPrice').innerText = '$' + total;
}
