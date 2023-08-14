function formatMoneyElements() {
    var nf = new Intl.NumberFormat();
    var moneyElements = document.getElementsByClassName("money");

    for (var i = 0; i < moneyElements.length; i++) {
        var moneyElement = moneyElements[i];
        var moneyText = moneyElement.textContent;
        var tien = parseInt(moneyText);
        moneyElement.textContent = nf.format(tien) + " vnd";
    }
}

// Gọi hàm formatMoneyElements để áp dụng định dạng số có dấu phẩy cho tất cả các phần tử có class "money"
formatMoneyElements();
