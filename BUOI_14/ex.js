let p = document.getElementById("my-frm").elements;
function chonSize(){
    if(p.size.value == "1"){
        p.donGia.value = 15000;
    }
    else if(p.size.value == "2"){
        p.donGia.value = 25000;
    }
    else if(p.size.value == "3"){
        p.donGia.value = 35000;
    }
    else{
        p.donGia.value = "";
    }
}
function chonKM(){
    if(p.khuyenMai.value == "1"){
        p.tkm.value = 20000;
    }
    else{
        p.tkm.value = 0;
    }
}
function tinhTien(){
    let tt = p.donGia.value*p.soLuong.value - p.tkm.value;
    p.thanhTien.value = tt;
}
function validate(){
    let flag = true;
    if(p.khach.value == ""){
        document.getElementById("khachError").innerHTML = "Bạn cần nhập tên khách";
        flag = false;
    }
    if(p.size.value == 0){
        document.getElementById("sizeError").innerHTML = "Bạn cần chọn kích thước";
        flag = false;
    }
    if(p.soLuong.value == ""){
        document.getElementById("soLuongError").innerHTML = "Bạn nhập số lượng";
        flag = false;
    }
    else if(isNaN(p.soLuong.value)){
        document.getElementById("soLuongError").innerHTML = "Bạn cần nhập vào 1 số";
        flag = false;
    }
    else if(p.soLuong.value < 0 ||p.soLuong.value >= 30 ){
        document.getElementById("soLuongError").innerHTML = "Bạn cần nhập đúng số lượng";
        flag = false;
    }
    if(p.khuyenMai.value == ""){
        document.getElementById("khuyenMaiError").innerHTML = "Bạn cần chọn khuyến mãi";
        flag = false;
    }
    if(flag == true){
        tinhTien();
        // return false;
    }
return false;
}