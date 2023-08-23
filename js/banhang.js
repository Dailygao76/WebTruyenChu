var buttonWrappers = document.querySelectorAll('.button_wrapper');

const products = [
    {
        imgSrc: 'img/hinh2.png',
        productName: 'Truyện Tiên Giả',
        unitPrice: '700000',
      },
      {
        imgSrc: 'img/hinh3.png',
        productName: 'Truyện Quốc Vương',
        unitPrice: '800000',
      },
      {
        imgSrc: 'img/hinh4.png',
        productName: 'Đế Bá',
        unitPrice: '200000',
      },
      {
        imgSrc: 'img/hinh5.png',
        productName: 'Vạn Cổ Thần Đế',
        unitPrice: '300000',
      },
  ];

 // Lấy thẻ tbody từ DOM
  const tbody = document.querySelector('tbody');
  
  // Thêm các thẻ <tr> vào tbody
  products.forEach(product => {
    const tr = document.createElement('tr');
  
    tr.innerHTML = `
      <td><input type="checkbox" class="chon" checked onchange="daott(this)"></td>
      <td class="sanpham">
          <img src="${product.imgSrc}">
          <span class="tensanpham">${product.productName}</span>
      </td>
      <td><div class="dongia" onkeyup="tien(this)">${product.unitPrice}</div></td>
      <td><div class="soluong" contenteditable="true" onkeyup="tien(this)">0</div></td>
      <td><div class="tien">0</div></td>
    `;
  
    tbody.appendChild(tr);
  });
  
  // Thêm dòng tổng tiền vào cuối tbody
  const totalRow = document.createElement('tr');
  totalRow.innerHTML = `
    <td colspan="4"><div style="font-weight: 600;">Tổng tiền</div></td>
    <td colspan="2"><div style="font-weight: 600; color: red;" id="tongtien">0</div></td>
  `;
  tbody.appendChild(totalRow);




//Hàm lấy thuộc tính ảnh tiền và tên truyện
// buttonWrappers.forEach(buttonWrapper => {
//     var button = buttonWrapper.querySelector('a');

//     button.addEventListener('click', function() {
//         var rowElement = buttonWrapper.closest('.row');

//         var imgElement = rowElement.querySelector('img');
//         var tensanphamElement = rowElement.querySelector('.tensanpham1');

//         var dataPrice = imgElement.getAttribute('data-price');
//         var srcValue = imgElement.getAttribute('src');
//         var tensanphamValue = tensanphamElement.textContent;
//     });
// });


function tinhtien() {
    var nf = new Intl.NumberFormat();
    var Dongia = document.getElementsByClassName("dongia");
    var Soluong = document.getElementsByClassName("soluong");
    var sotien_arr = document.getElementsByClassName("tien");


    var tongdongia = 0,
        tongsoluong = 0,
        tongtien = 0;
        for (var i = 0; i < sotien_arr.length; i++) {
            var sotien = sotien_arr[i].innerText;
            sotien = parseInt(sotien);
            tongtien += sotien;
        }
       
        document.getElementById("tongtien").innerText = nf.format(tongtien);
      
}

function daott(obj) {
    var nf = new Intl.NumberFormat();
    var row = obj.parentElement.parentElement;
    var soluong = row.querySelector('.soluong');

    var tien = row.querySelector('.tien');

    var isChecked;

    if (isChecked = obj.checked) {
        soluong.setAttribute('contenteditable', 'true');
        soluong.classList.remove("hideqty-after");
        tinhtien();
    } else {
        soluong.setAttribute('contenteditable', 'false');
        soluong.classList.add("hideqty-after");
        tien.innerText=0;
        soluong.innerText=0;
        tinhtien();
    }
}


function tien(element) {
    var nf = new Intl.NumberFormat();
    var row = element.parentNode.parentNode;
    var dongia = row.querySelector('.dongia').innerText;
    var soluong = row.querySelector('.soluong').innerText;
    var tien = dongia * soluong;
    row.querySelector('.tien').innerText = tien;
    tinhtien();
}

function locSanPhamTheoGia() {
    var mucGiaSelect = document.getElementById("mucgia");
    var selectedMucGia = mucGiaSelect.value;

    var rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var giaElement = row.querySelector(".dongia");
        if (giaElement) {
            var gia = parseInt(giaElement.innerText);

            // Kiểm tra giá sản phẩm và hiển thị/ẩn mặt hàng dựa trên mức giá được chọn
            if (selectedMucGia === "all" || (selectedMucGia === "duoi500k" && gia < 500000) ||
                (selectedMucGia === "tu500kden1tr" && gia >= 500000 && gia <= 1000000) ||
                (selectedMucGia === "tren1tr" && gia > 1000000)) {
                row.style.display = "table-row";
                resetTongTienVaSoLuong();
            } else {
                row.style.display = "none";
                resetTongTienVaSoLuong();
            }
        }
    }
}

function resetTongTienVaSoLuong() {
    var soluongElements = document.getElementsByClassName("soluong");
    var tienElements = document.getElementsByClassName("tien");
    for (var i = 0; i < soluongElements.length; i++) {
        soluongElements[i].innerText = "0";
        tienElements[i].innerText = "0";
    }
    tinhtien();
}

