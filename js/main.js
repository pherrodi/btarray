// input : arrTen  , arrDiem

var arrTen =[];
var arrDiem =[];

function initArray () {
    var arrTDTen =  document.querySelectorAll('#tableSinhVien tr td:nth-child(3)');
    for(var index  =0 ;  index < arrTDTen.length ; index ++){
        var td = arrTDTen[index];
        arrTen.push(td.innerHTML);
    }
    console.log('arrTen',arrTen);
   var arrTDDiem = document.querySelectorAll('#tableSinhVien tr td:nth-child(4)');
   for (var index =0; index < arrTDDiem.length ; index ++) {
        var td = arrTDDiem[index];
        arrDiem.push(+td.innerHTML);
   }
   console.log('arrDiem',arrDiem);

}
initArray ();

document.querySelector('#btnSVCaoDiemNhat').onclick = function () {
    var indexMax = 0;
    var maxDiem = arrDiem[indexMax] ;

    for ( var index = 1; index < arrDiem.length; index++) {
        if (arrDiem[index] > maxDiem) {
            maxDiem = arrDiem[index]; 
            indexMax = index;
        }
    }
    document.querySelector('#svGioiNhat').innerHTML = `Họ Tên ${arrTen[indexMax]} - Điểm ${arrDiem[indexMax]} `;
    
}

document.querySelector('#btnSVThapDiemNhat').onclick = function () {
    var indexMin = 0 ;
    var minDiem = arrDiem[indexMin] ;
    for (var index = 1; index < arrDiem.length; index ++) {
        if (arrDiem[index] < minDiem) {
            minDiem = arrDiem[index];
            indexMin = index;
        }
    }
    document.querySelector('#svYeuNhat').innerHTML = ` Họ Tên ${arrTen[indexMin]} -  Điểm ${arrDiem[indexMin]}`;
}

document.querySelector('#btnSapXepTang').onclick = function () {
    var arrDiemSort = _.sortBy (arrDiem);
    document.querySelector('#dtbTang').innerHTML = arrDiemSort;
}